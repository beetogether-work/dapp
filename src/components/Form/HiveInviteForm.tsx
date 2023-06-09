import { useWeb3Modal } from '@web3modal/react';
import { ethers } from 'ethers';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useContext } from 'react';
import { useProvider, useSigner } from 'wagmi';
import * as Yup from 'yup';
import { config } from '../../config';
import TalentLayerContext from '../../context/talentLayer';
import TalentLayerID from '../../contracts/ABI/TalentLayerID.json';
import { createTalentLayerIdTransactionToast, showErrorTransactionToast } from '../../utils/toast';
import SubmitButton from './SubmitButton';

interface IFormValues {
  handle: string;
  groupHandle: string;
}

const initialValues: IFormValues = {
  handle: '',
  groupHandle: '',
};

function HiveInviteForm() {
  const { open: openConnectModal } = useWeb3Modal();
  const { account } = useContext(TalentLayerContext);
  const { data: signer } = useSigner({
    chainId: parseInt(process.env.NEXT_PUBLIC_NETWORK_ID as string),
  });

  const provider = useProvider({ chainId: parseInt(process.env.NEXT_PUBLIC_NETWORK_ID as string) });
  let tx: ethers.providers.TransactionResponse;

  const validationSchema = Yup.object().shape({
    handle: Yup.string()
      .min(5)
      .max(15)
      .matches(/^[a-z0-9][a-z0-9-_]*$/, 'Only a-z, 0-9 and -_ allowed, and cannot begin with -_')
      .when('isConnected', {
        is: account && account.isConnected,
        then: schema => schema.required('handle is required'),
      }),
  });

  const onSubmit = async (
    submittedValues: IFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    if (account && account.address && account.isConnected && provider && signer) {
      try {
        const contract = new ethers.Contract(
          config.contracts.talentLayerId,
          TalentLayerID.abi,
          signer,
        );

        const handlePrice = await contract.getHandlePrice(submittedValues.handle);

        // TODO: update to new contract group createGroup
        tx = await contract.mint(process.env.NEXT_PUBLIC_PLATFORM_ID, submittedValues.handle, {
          value: handlePrice,
        });
        await createTalentLayerIdTransactionToast(
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
        // TODO: now redirect to hive dashboard page
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
            xxx Invite you
          </h2>
          <p className='font-alt text-sm font-normal leading-normal text-gray-400 mb-6'>
            to join the yyy hive
          </p>
          <div className='grid grid-cols-1 gap-6 border border-gray-700 rounded-xl p-8 bg-endnight'>
            <label className='block'>
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

            <SubmitButton isSubmitting={isSubmitting} label='Join the hive' />
          </div>
          <p className='text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5'>
            <span>Already joined the hive?</span>
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

export default HiveInviteForm;
