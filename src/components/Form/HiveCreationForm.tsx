import { useWeb3Modal } from '@web3modal/react';
import { ethers } from 'ethers';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useContext } from 'react';
import { useProvider, useSigner } from 'wagmi';
import * as Yup from 'yup';
import BeeTogetherContext from '../../context/beeTogether';
import HiveFactoryABI from '../../contracts/ABI/HiveFactory.json';
import TalentLayerID from '../../contracts/ABI/TalentLayerID.json';
import { createTalentLayerIdTransactionToast, showErrorTransactionToast } from '../../utils/toast';
import SubmitButton from './SubmitButton';
import { useRouter } from 'next/router';
import { useConfig } from '../../hooks/useConfig';
import { useChainId } from '../../hooks/useChainId';

interface IFormValues {
  handle: string;
  groupHandle: string;
}

function HiveCreationForm() {
  const chainId = useChainId();
  const config = useConfig();
  const router = useRouter();
  const { open: openConnectModal } = useWeb3Modal();
  const { account, user } = useContext(BeeTogetherContext);
  const { data: signer } = useSigner({
    chainId,
  });

  const provider = useProvider({ chainId });
  let tx: ethers.providers.TransactionResponse;

  const initialValues: IFormValues = {
    handle: user?.handle || '',
    groupHandle: '',
  };

  console.log('test', account, account?.isConnected, user?.handle || '');

  const validationSchema = Yup.object().shape({
    handle: Yup.string()
      .min(5)
      .max(15)
      .matches(/^[a-z0-9][a-z0-9-_]*$/, 'Only a-z, 0-9 and -_ allowed, and cannot begin with -_')
      .when('isConnected', {
        is: account && account.isConnected,
        then: schema => schema.required('handle is required'),
      }),
    groupHandle: Yup.string()
      .min(5)
      .max(15)
      .matches(/^[a-z0-9][a-z0-9-_]*$/, 'Only a-z, 0-9 and -_ allowed, and cannot begin with -_')
      .when('isConnected', {
        is: account && account.isConnected,
        then: schema => schema.required('groupHandle is required'),
      }),
  });

  const onSubmit = async (
    submittedValues: IFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    if (account && account.address && account.isConnected && provider && signer) {
      try {
        const hiveFactoryContract = new ethers.Contract(
          config.contracts.hiveFactory,
          HiveFactoryABI.abi,
          signer,
        );
        const talentLayerIdcontract = new ethers.Contract(
          config.contracts.talentLayerId,
          TalentLayerID.abi,
          signer,
        );

        const handlePriceForHandle = user?.handle
          ? 0
          : await talentLayerIdcontract.getHandlePrice(submittedValues.handle);
        const handlePriceForGroupHandle = await talentLayerIdcontract.getHandlePrice(
          submittedValues.groupHandle,
        );
        const value = handlePriceForGroupHandle.add(handlePriceForHandle);

        console.log({
          value: value.toString(),
          groupHandle: submittedValues.groupHandle,
          handle: submittedValues.handle,
        });

        tx = await hiveFactoryContract.createHive(
          process.env.NEXT_PUBLIC_PLATFORM_ID,
          submittedValues.groupHandle,
          submittedValues.handle,
          1000,
          {
            value: value.toString(),
          },
        );

        await createTalentLayerIdTransactionToast(
          chainId,
          {
            pending: 'Creating your hive...',
            success: 'Congrats! Your hive is ready!',
            error: 'An error occurred while creating your hive',
          },
          provider,
          tx,
          account.address,
        );

        setSubmitting(false);
        router.push('/onboarding/success');
      } catch (error: any) {
        showErrorTransactionToast(error);
      }
    } else {
      openConnectModal();
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ isSubmitting }) => (
        <Form className='mx-auto w-full max-w-xs px-2'>
          <h2 className='font-heading text-3xl font-medium leading-normal pt-12 sm:pt-0'>
            Welcome
          </h2>
          <p className='font-alt text-sm font-normal leading-normal text-gray-400 mb-6'>
            Let's start by creating your hive!
          </p>
          <div className='grid grid-cols-1 gap-6 border border-gray-700 rounded-xl p-6 bg-endnight'>
            <label className={`block ${user ? 'hidden' : ''}`}>
              <span className='text-gray-100'>Your handle</span>
              <Field
                type='text'
                id='handle'
                name='handle'
                className='mt-1 mb-1 block w-full rounded-xl border border-gray-700 bg-midnight shadow-sm focus:ring-opacity-50'
                placeholder=''
              />
              <span className='text-red-500'>
                <ErrorMessage name='handle' />
              </span>
            </label>

            <div className='flex'>
              <label className='block flex-1'>
                <span className='text-gray-100'>Your Hive Name</span>
                <Field
                  type='text'
                  id='groupHandle'
                  name='groupHandle'
                  className='mt-1 mb-1 block w-full rounded-xl border border-gray-700 bg-midnight shadow-sm focus:ring-opacity-50'
                  placeholder=''
                />
                <span className='text-red-500'>
                  <ErrorMessage name='groupHandle' />
                </span>
              </label>
            </div>

            <SubmitButton isSubmitting={isSubmitting} label='Create your hive' />
          </div>
          <p className='text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5'>
            <span>Have already an hive?</span>
            <a
              href='/dashboard'
              className='text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline focus:underline focus:outline-none underline'>
              {' '}
              Connect here{' '}
            </a>
          </p>
        </Form>
      )}
    </Formik>
  );
}

export default HiveCreationForm;
