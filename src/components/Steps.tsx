import Image from 'next/image';
import { useContext } from 'react';
import ConnectBlock from './ConnectBlock';
import BeeTogetherContext from '../context/beeTogether';
import Link from 'next/link';

function Steps() {
  const { account, hive } = useContext(BeeTogetherContext);

  console.log('STEPS');

  return (
    <div className='max-w-7xl mx-auto text-gray-200 sm:px-4 lg:px-0'>
      <div className='flex justify-center'>
        <Image
          src={'/logo.png'}
          width={200}
          height={200}
          alt='BeeTogether logo'
          className='-ml-4'
        />
      </div>

      <div className='flex items-center justify-center w-full flex-col'>
        <p className='leading-10'>
          <span className='pr-2'>💪</span> Manage your team <br />
          <span className='pr-2'>💰</span> Payment breakdown
          <br />
          <span className='pr-2'>📢</span> Governance made easy
        </p>
        {!account?.isConnected && (
          <div className='p-8 flex flex-col items-center'>
            <ConnectBlock />
          </div>
        )}
        {!hive && (
          <>
            <Link
              className='grow px-5 py-2 rounded-xl bg-white text-redpraha hover:bg-midnight  mt-6'
              href='/onboarding'>
              Create your hive
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Steps;
