import { ethers } from 'ethers';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { useSigner } from 'wagmi';
import InviteMember from '../../components/InviteMember';
import Logo from '../../components/Layout/Logo';
import Loading from '../../components/Loading';
import LeftSide from '../../components/onboarding/LeftSide';
import BeeTogetherContext from '../../context/beeTogether';

function Success() {
  const [signature, setSignature] = useState<string>();
  const { hive, refreshData } = useContext(BeeTogetherContext);
  const { data: signer } = useSigner({
    chainId: parseInt(process.env.NEXT_PUBLIC_NETWORK_ID as string),
  });

  const generateSignature = async () => {
    if (!hive || !signer || signature) {
      console.log('MISSING');
      if (refreshData) {
        await refreshData();
      }
      return;
    }

    const messageHash = ethers.utils.solidityKeccak256(
      ['string', 'address'],
      ['join', hive.address],
    );

    // Carol the owner of the platform signed the message with her private key
    const signedMessage = await signer.signMessage(ethers.utils.arrayify(messageHash));

    setSignature(signedMessage);
  };

  if (!hive) {
    return (
      <div className='mt-10'>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <div className='h-screen md:flex'>
        <LeftSide
          title='Almost there'
          subtext='Now you can build your deam team and invite everyone to join!'></LeftSide>

        <div className='flex flex-col items-center justify-between py-10 md:w-1/2'>
          <div className='mx-auto flex w-full max-w-xs items-center justify-between px-3'>
            <Logo />
          </div>

          <div className='mx-auto w-full max-w-xs px-2 text-center'>
            <h2 className='font-heading text-3xl font-medium leading-normal pt-12 sm:pt-0'>
              Congrats!
            </h2>
            <p className='font-alt text-sm font-normal leading-normal text-gray-400 mb-6'>
              Now invite some team members!
            </p>

            {signature ? (
              <>
                <InviteMember hiveAddress={hive.address} signature={signature} />

                <p className='mt-4 mb-4'>then</p>

                <Link
                  href='/dashboard'
                  className='block mt-4 grow px-5 py-3 rounded-xl border-redpraha bg-endnight text-white'>
                  Go to your Hive dashboard
                </Link>
              </>
            ) : (
              <button
                onClick={generateSignature}
                className='block mt-4 grow px-5 py-3 rounded-xl border-redpraha bg-endnight text-white'>
                Generate invitation link
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
