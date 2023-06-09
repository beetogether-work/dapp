import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useDisconnect } from 'wagmi';
import BeeTogetherContext from '../context/beeTogether';
import { truncateAddress } from '../utils';
import Link from 'next/link';

function UserSubMenu() {
  const { account, user, hive } = useContext(BeeTogetherContext);
  const router = useRouter();
  const { disconnect } = useDisconnect();

  if (!account?.isConnected) {
    return null;
  }

  return (
    <div
      role='menu'
      className='divide-gray-700 border-gray-700 bg-endnight mt-2 w-64 origin-top-right divide-y rounded-md border shadow-lg focus:outline-none'>
      <div className='p-6 text-center' role='none'>
        <div
          className='relative mx-auto flex h-20 w-20 items-center justify-center rounded-full'
          role='none'>
          <Image
            className='max-w-full rounded-full object-cover shadow-sm'
            alt=''
            src={`/images/default-avatar-1.jpeg`}
            width={80}
            height={80}
          />
        </div>
        <div className='mt-3' role='none'>
          <h6
            className='font-heading text-gray-800 text-sm font-medium dark:text-white'
            role='none'>
            {' '}
            {user?.handle}{' '}
          </h6>
          <p className='text-gray-400 mb-4 font-sans text-xs' role='none'>
            {account?.address && truncateAddress(account.address)}
          </p>
          {user && (
            <Link
              href='/dashboard/profile/edit'
              className='mt-2 border border-redpraha rounded-xl hover:bg-endnight text-white bg-midnight px-5 py-2 w-full'
              role='none'>
              Manage Account
            </Link>
          )}
        </div>
      </div>
      {hive && (
        <div className='px-2 py-2' role='none'>
          <div role='menuitem'>
            <Link
              aria-current='page'
              href='/dashboards'
              className='group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300 text-gray-500 bg-endnight hover:bg-midnight'>
              <div className='relative inline-flex h-9 w-9 items-center justify-center rounded-full mr-2'>
                <Image
                  className='max-w-full rounded-full object-cover shadow-sm dark:border-transparent'
                  alt=''
                  src={`/images/default-avatar-1.jpeg`}
                  width={36}
                  height={36}
                />
              </div>
              <div className='ms-2'>
                <h6 className='font-heading text-gray-800 text-xs font-medium leading-none dark:text-white'>
                  {' '}
                  {hive.identity.handle}{' '}
                </h6>
                <p className='text-gray-400 font-sans text-xs'>{hive.members.length} members</p>
              </div>
            </Link>
          </div>
        </div>
      )}
      <div className='p-3' role='none'>
        <button
          onClick={event => {
            event.preventDefault();
            disconnect();
            router.push('/');
          }}
          className={`rounded-xl is-button-default w-full`}>
          Log out
        </button>
      </div>
    </div>
  );
}

export default UserSubMenu;
