import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import { useNetwork } from 'wagmi';
import NetworkLink from './NetworkLink';
import Image from 'next/image';

const chainIdToName = (chainId: number) => {
  switch (chainId) {
    case 1:
      return 'Ethereum';
    case 5:
      return 'Goerli';
    case 1337:
      return 'Localhost';
    case 43113:
      return 'Fuji';
    case 80001:
      return 'Mumbai';
    case 137:
      return 'Polygon';
    case 324:
      return 'zkSync Mainnet';
    case 280:
      return 'zkSync Testnet';
    default:
      return 'Unknown';
  }
};

function NetworkSwitch() {
  const network = useNetwork();

  if (network?.chain === undefined) {
    return null;
  }

  return (
    <Menu as='div' className='relative text-left flex items-center'>
      <Menu.Button
        type='button'
        className='hover:ring-muted-700 border-muted-700 bg-muted-800 ring-offset-muted-900 flex h-9 w-9 items-center justify-center rounded-full border bg-endnight ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4'>
        <Image
          width={28}
          height={28}
          className='h-7 w-7 rounded-full'
          src='/images/blockchain/zksync.png'
          alt='zksync icon'
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'>
        <Menu.Items className='absolute right-0 top-[60px] z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-gray-700 bg-endnight'>
          <div className='py-1 '>
            <Menu.Item key={process.env.NEXT_PUBLIC_NETWORK_ID}>
              <NetworkLink
                key={process.env.NEXT_PUBLIC_NETWORK_ID}
                chaindId={parseInt(process.env.NEXT_PUBLIC_NETWORK_ID as string)}
                chainName={chainIdToName(parseInt(process.env.NEXT_PUBLIC_NETWORK_ID as string))}
              />
            </Menu.Item>
            <Menu.Item key={'324'}>
              <NetworkLink
                key={'324'}
                chaindId={parseInt('324')}
                chainName={chainIdToName(parseInt('324'))}
              />
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default NetworkSwitch;
