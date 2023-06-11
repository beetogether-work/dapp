import Image from 'next/image';
import InviteModal from '../../components/InviteModal';
import Steps from '../../components/Steps';
import BeeTogetherContext from '../../context/beeTogether';
import { useContext, useEffect, useState } from 'react';
import { EyeIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import ProposalRequests from '../../components/ProposalRequests';
import { BigNumber, ethers } from 'ethers';
import { useProvider } from 'wagmi';
import { useChainId } from '../../hooks/useChainId';
import { NetworkEnum } from '../../types';

function Hive() {
  const chainId = useChainId();
  const provider = useProvider();
  const { account, user, hive } = useContext(BeeTogetherContext);
  const [paymasterBalance, setpaymasterBalance] = useState(BigNumber.from(0));

  const isZkSync = chainId === NetworkEnum.ZKSYNC;

  useEffect(() => {
    if (!hive || !isZkSync) return;
    const getPaymasterBalance = async () => {
      const paymasterBalance = await provider.getBalance(hive.paymasterAddress);
      setpaymasterBalance(paymasterBalance);
    };

    getPaymasterBalance();
  }, [hive, isZkSync]);

  if (!account?.isConnected || !user || !hive) {
    return <Steps />;
  }

  return (
    <div className='max-w-7xl mx-auto text-gray-200 sm:px-4 lg:px-0'>
      <div className='bg-redpraha rounded-xl px-6 py-6'>
        <div>
          <div className='flex w-full flex-col items-center sm:flex-row'>
            <div className='flex flex-1 flex-row w-full mb-4'>
              <div className='relative inline-flex shrink-0 items-center justify-center outline-none h-12 w-12 rounded-full border-primary-200/50 ring-primary-200/50 ring-offset-primary-600 border ring-2 ring-offset-4 ml-1'>
                <div className='flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full'>
                  <Image
                    width={48}
                    height={48}
                    src='/images/hive.jpeg'
                    alt='hive'
                    className='max-h-full max-w-full object-cover shadow-sm border-transparent h-12 w-12'
                  />
                </div>
              </div>
              <h2 className='font-heading text-2xl font-bold leading-none text-white flex-1 ml-4 flex items-center'>
                {hive.identity?.handle}
              </h2>
            </div>
            <div className='flex w-full flex-1 flex-col'>
              <h2 className='font-heading text-base font-semibold leading-tight mb-1 text-white'>
                <span>Members</span>
              </h2>
              <div className='mt-auto flex gap-2'>
                {hive.members.map((item, index) => (
                  <a
                    href={`/dashboard/profile/${item}`}
                    key={index}
                    className='relative inline-flex shrink-0 items-center justify-center outline-none h-10 w-10'>
                    <div className='flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300'>
                      <img
                        src={`/images/default-avatar-${Number(index) % 9}.jpeg`}
                        className='max-h-full max-w-full object-cover shadow-sm border-transparent h-10 w-10 rounded-xl'
                      />
                    </div>
                  </a>
                ))}

                <InviteModal />
              </div>
            </div>
          </div>
        </div>
        {isZkSync && (
          <div className='mt-4'>
            Paymaster balance (used to cover gas fees for hive members):
            <span>{ethers.utils.formatEther(paymasterBalance)}</span>
          </div>
        )}
      </div>

      <div className='flex mt-4'>
        <Link
          href='/dashboard/hive/configure'
          className=' hover:bg-endnight text-white bg-endnight px-3 py-2 text-sm flex items-center mr-4 rounded-xl'>
          <PencilSquareIcon className='w-[18px] h-[18px] text-redpraha mr-2' />
          Configure
        </Link>
        <Link
          href={`/dashboard/hive/${hive.id}`}
          className=' hover:bg-endnight text-white bg-endnight px-3 py-2 text-sm flex items-center mr-4 rounded-xl'>
          <EyeIcon className='w-[18px] h-[18px] text-redpraha mr-2' />
          Public page
        </Link>
      </div>

      <ProposalRequests />
    </div>
  );
}

export default Hive;
