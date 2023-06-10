import Image from 'next/image';
import { useContext } from 'react';
import ConnectBlock from './ConnectBlock';
import BeeTogetherContext from '../context/beeTogether';

function Steps() {
  const { account } = useContext(BeeTogetherContext);

  if (account?.isConnected) {
    return null;
  }

  console.log('STEPS');
  const createTeam = () => {
    console.log('createTeam');
  };

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
        {account?.isConnected && (
          <>
            <button
              type='button'
              className='hover:bg-endnight hover:text-white bg-redpraha text-midnight px-5 py-2 rounded-xl w-full mt-6'
              onClick={createTeam}>
              Create your team
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Steps;
