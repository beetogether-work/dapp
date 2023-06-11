import { ethers, FixedNumber } from 'ethers';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import { QuestionMarkCircle } from 'heroicons-react';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { useProvider, useSigner } from 'wagmi';
import * as Yup from 'yup';
// import { Web3Provider, Provider } from 'zksync-web3';
import BeeTogetherContext from '../../context/beeTogether';
import HiveABI from '../../contracts/ABI/Hive.json';
import ServiceRegistry from '../../contracts/ABI/TalentLayerService.json';
import useAllowedTokens from '../../hooks/useAllowedTokens';
import { useChainId } from '../../hooks/useChainId';
import { useConfig } from '../../hooks/useConfig';
import { postOpenAiRequest } from '../../modules/OpenAi/utils';
import { IHive, IProposal, IService, IUser } from '../../types';
import { getTxOverrides } from '../../utils/getTxOverrides';
import { postToIPFS } from '../../utils/ipfs';
import { getProposalSignature } from '../../utils/signature';
import { createMultiStepsTransactionToast, showErrorTransactionToast } from '../../utils/toast';
import { parseRateAmount } from '../../utils/web3';
import Loading from '../Loading';
import { delegateCreateOrUpdateProposal } from '../request';
import ServiceItem from '../ServiceItem';
import SubmitButton from './SubmitButton';

interface Share {
  to: string;
  amount: number;
}

interface IFormValues {
  about: string;
  rateToken: string;
  rateAmount: number;
  expirationDate: number;
  videoUrl: string;
  shares: Share[];
}

const validationSchema = Yup.object({
  about: Yup.string().required('Please provide a description of your service'),
  rateToken: Yup.string().required('Please select a payment token'),
  rateAmount: Yup.string().required('Please provide an amount for your service'),
  expirationDate: Yup.number().integer().required('Please provide an expiration date'),
});

const getDefaultShares = (hive?: IHive) => {
  if (hive) {
    const membersLength = hive.members.length;
    const shareByMember = Math.floor((10000 - hive.honeyFee) / membersLength);
    const remaining = 10000 - hive.honeyFee - shareByMember * membersLength;
    const shares = [];
    for (let index = 0; index < membersLength; index++) {
      shares.push({
        to: hive.members[index],
        amount: index == 0 ? shareByMember + remaining : shareByMember,
      });
    }
    return shares;
  }
  return [];
};

function ProposalForm({
  user,
  service,
  existingProposal,
}: {
  user: IUser;
  service: IService;
  existingProposal?: IProposal;
}) {
  const config = useConfig();
  const chainId = useChainId();
  const provider = useProvider({ chainId });
  const { data: signer } = useSigner({
    chainId,
  });
  const router = useRouter();
  const allowedTokenList = useAllowedTokens();
  const { isActiveDelegate, hive } = useContext(BeeTogetherContext);
  const [aiLoading, setAiLoading] = useState(false);

  if (allowedTokenList.length === 0) {
    return <div>Loading...</div>;
  }

  let existingExpirationDate, existingRateTokenAmount;

  if (existingProposal) {
    existingExpirationDate = Math.floor(
      (Number(existingProposal?.expirationDate) - Date.now() / 1000) / (60 * 60 * 24),
    );

    const token = allowedTokenList.find(
      token => token.address === existingProposal?.rateToken.address,
    );

    existingRateTokenAmount = FixedNumber.from(
      ethers.utils.formatUnits(existingProposal.rateAmount, token?.decimals),
    ).toUnsafeFloat();
  }

  const initialValues: IFormValues = {
    about: existingProposal?.description?.about || '',
    rateToken: existingProposal?.rateToken.address || '',
    rateAmount: existingRateTokenAmount || 0,
    expirationDate: existingExpirationDate || 15,
    videoUrl: existingProposal?.description?.video_url || '',
    shares: getDefaultShares(hive),
  };

  const askAI = async (input: string, setFieldValue: any) => {
    setAiLoading(true);
    const context =
      'We are on a freelance platform, we a are a collective of freelance and we need help to generate a proposal for a gig.';
    const serviceContext = `The is the job title:${service?.description?.title}.`;
    const serviceBuyerContext = `This is the client name:${service.buyer.handle}.`;
    const userContext = `My name is:${user.handle}. And this is a bit more about me: ${user?.description?.about}.`;
    const proposalContext = `And this is some information about the proposal I want to makde: ${input}.`;
    const agregatedContext =
      context + serviceContext + serviceBuyerContext + userContext + proposalContext;
    try {
      const responseText = await postOpenAiRequest(agregatedContext);
      setFieldValue('about', responseText);
    } catch (error) {
      console.error(error);
    } finally {
      setAiLoading(false);
    }
  };

  const onSubmit = async (
    values: IFormValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void },
  ) => {
    const token = allowedTokenList.find(token => token.address === values.rateToken);
    if (provider && signer && token) {
      try {
        const parsedRateAmount = await parseRateAmount(
          values.rateAmount.toString(),
          values.rateToken,
          token.decimals,
        );
        const now = Math.floor(Date.now() / 1000);
        const convertExpirationDate = now + 60 * 60 * 24 * values.expirationDate;
        const convertExpirationDateString = convertExpirationDate.toString();

        const parsedRateAmountString = parsedRateAmount.toString();

        const cid = await postToIPFS(
          JSON.stringify({
            about: values.about,
            video_url: values.videoUrl,
          }),
        );

        // Get platform signature
        const signature = await getProposalSignature({
          profileId: Number(user.id),
          cid,
          serviceId: Number(service.id),
        });

        let tx;
        if (hive) {
          // const zkSyncSigner = new Web3Provider(window.ethereum).getSigner(); This doesn't work on mobile :()
          const hiveContract = new ethers.Contract(hive.address, HiveABI.abi, signer);
          const shares = values.shares.map(share => share.amount);

          // ZkSync
          const createProposalRequestParams = [
            service.id,
            values.rateToken,
            parsedRateAmountString,
            process.env.NEXT_PUBLIC_PLATFORM_ID,
            cid,
            convertExpirationDateString,
            hive.members,
            shares,
          ];

          const overrides = await getTxOverrides(
            chainId,
            provider,
            hiveContract,
            'createProposalRequest',
            createProposalRequestParams,
            hive.paymasterAddress,
          );

          console.log('Overrides: ', overrides);

          tx = await hiveContract.createProposalRequest(...createProposalRequestParams, overrides);
        } else if (isActiveDelegate) {
          const response = await delegateCreateOrUpdateProposal(
            chainId,
            user.id,
            user.address,
            service.id,
            values.rateToken,
            parsedRateAmountString,
            cid,
            convertExpirationDateString,
            existingProposal?.status,
          );
          tx = response.data.transaction;
        } else {
          const contract = new ethers.Contract(
            config.contracts.serviceRegistry,
            ServiceRegistry.abi,
            signer,
          );
          tx = existingProposal
            ? await contract.updateProposal(
                user.id,
                service.id,
                values.rateToken,
                parsedRateAmountString,
                cid,
                convertExpirationDateString,
              )
            : await contract.createProposal(
                user.id,
                service.id,
                values.rateToken,
                parsedRateAmountString,
                process.env.NEXT_PUBLIC_PLATFORM_ID,
                cid,
                convertExpirationDateString,
                signature,
              );
        }

        await createMultiStepsTransactionToast(
          chainId,
          {
            pending: 'Creating your proposal...',
            success: 'Congrats! Your proposal has been added',
            error: 'An error occurred while creating your proposal',
          },
          provider,
          tx,
          'proposalRequest',
          cid,
          true,
        );
        setSubmitting(false);
        resetForm();
        router.push(`/dashboard`);
      } catch (error) {
        showErrorTransactionToast(error);
      }
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ isSubmitting, values, setFieldValue }) => (
        <Form>
          <h2 className='mb-2 text-white font-bold'>For the job:</h2>
          <ServiceItem service={service} />

          <h2 className=' mt-8 mb-2 text-white font-bold'>Describe your proposal in details:</h2>
          <div className='grid grid-cols-1 gap-6 border border-gray-700 rounded-xl p-6 bg-endnight'>
            <label className='block'>
              <span className='text-gray-100'>about</span>
              <Field
                as='textarea'
                id='about'
                rows={8}
                name='about'
                className='mt-1 mb-1 block w-full rounded-xl border border-gray-700 bg-midnight shadow-sm focus:ring-opacity-50'
                placeholder=''
              />
              <div className='border-gray-700 bg-gray-800 relative w-full border transition-all duration-300 rounded-xl p-4'>
                <div className='flex w-full items-center gap-3'>
                  <QuestionMarkCircle className='hidden' />
                  <div>
                    <h2 className='font-heading text-xs font-bold text-white mb-1'>
                      <span>Need help?</span>
                    </h2>
                    <p className='font-alt text-xs font-normal'>
                      <span className='text-gray-400'>
                        Write few lines above and get some help from our AI
                      </span>
                    </p>
                  </div>
                  <div className='ms-auto'>
                    <button
                      disabled={aiLoading}
                      onClick={e => {
                        e.preventDefault();
                        askAI(values.about, setFieldValue);
                      }}
                      className='border text-white bg-gray-700 hover:bg-gray-600 border-gray-600 rounded-md h-10 w-10 p-2 relative inline-flex items-center justify-center space-x-1 font-sans text-sm font-normal leading-5 no-underline outline-none transition-all duration-300'>
                      {aiLoading ? <Loading /> : 'GO'}
                    </button>
                  </div>
                </div>
              </div>
              <span className='text-red-500'>
                <ErrorMessage name='about' />
              </span>
            </label>

            <div className='flex'>
              <label className='block flex-1 mr-4'>
                <span className='text-gray-100'>Amount</span>
                <Field
                  type='number'
                  id='rateAmount'
                  name='rateAmount'
                  className='mt-1 mb-1 block w-full rounded-xl border border-gray-700 bg-midnight shadow-sm focus:ring-opacity-50'
                  placeholder=''
                />
                <span className='text-red-500'>
                  <ErrorMessage name='rateAmount' />
                </span>
              </label>
              <label className='block'>
                <span className='text-gray-100'>Token</span>
                <Field
                  component='select'
                  id='rateToken'
                  name='rateToken'
                  className='mt-1 mb-2 block w-full rounded-xl border border-gray-700 bg-midnight shadow-sm focus:ring-opacity-50'
                  placeholder=''>
                  <option value=''>Select a token</option>
                  {allowedTokenList.map((token, index) => (
                    <option key={index} value={token.address}>
                      {token.symbol}
                    </option>
                  ))}
                </Field>
                <span className='text-red-500'>
                  <ErrorMessage name='rateToken' />
                </span>
              </label>
            </div>
            <label className='block flex-1'>
              <span className='text-gray-100'>Expiration Date (Days)</span>
              <Field
                type='number'
                id='expirationDate'
                name='expirationDate'
                className='mt-1 mb-2 block w-full rounded-xl border border-gray-700 bg-midnight shadow-sm focus:ring-opacity-50'
                placeholder=''
              />
              <span className='text-red-500'>
                <ErrorMessage name='expirationDate' />
              </span>
            </label>
            <label className='block flex-1'>
              <span className='text-gray-100'>Video URL (optional)</span>
              <Field
                type='text'
                id='videoUrl'
                name='videoUrl'
                className='mt-1 mb-2 block w-full rounded-xl border border-gray-700 bg-midnight shadow-sm focus:ring-opacity-50'
                placeholder='Enter  video URL'
              />
              <span className='text-red-500'>
                <ErrorMessage name='videoUrl' />
              </span>
            </label>

            {values.shares.length > 0 && <p>Payment splitting</p>}
            <FieldArray name='shares'>
              {({ push }) => (
                <div className='mb-2'>
                  {values.shares.length > 0 &&
                    values.shares.map((share, index) => (
                      <div className='row' key={index}>
                        <div className='flex w-full'>
                          <label className='block flex-1 mr-4'>
                            <span className='text-gray-200'>To</span>
                            <Field
                              type='text'
                              id='to'
                              name={`shares.${index}.to`}
                              className='mt-1 mb-2 block w-full rounded-xl border border-gray-700 bg-midnight shadow-sm focus:ring-opacity-50'
                              placeholder=''
                            />
                          </label>
                          <label className='block flex-1'>
                            <span className='text-gray-200'>Amount</span>
                            <Field
                              type='number'
                              id='amount'
                              name={`shares.${index}.amount`}
                              className='mt-1 mb-2 block w-full rounded-xl border border-gray-700 bg-midnight shadow-sm focus:ring-opacity-50'
                              placeholder=''
                            />
                          </label>
                        </div>
                        <p>
                          <span className='text-red-500 mt-2'>
                            <ErrorMessage name={`shares.${index}.amount`} />
                          </span>
                          <span className='text-red-500'>
                            <ErrorMessage name={`shares.${index}.to`} />
                          </span>
                        </p>
                      </div>
                    ))}
                </div>
              )}
            </FieldArray>

            <SubmitButton isSubmitting={isSubmitting} label='Post' />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ProposalForm;
