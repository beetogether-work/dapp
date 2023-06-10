import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useNetwork } from 'wagmi';
import NetworkLink from './NetworkLink';
import Image from 'next/image';

function NetworkSwitch() {
  const network = useNetwork();
  const { chains } = network;

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
            {chains.map(chain => (
              <Menu.Item key={chain.id}>
                <NetworkLink chaindId={chain.id} chainName={chain.name} />
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default NetworkSwitch;
