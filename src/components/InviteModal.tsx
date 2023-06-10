import { useContext, useState } from 'react';
import InviteMember from './InviteMember';
import { PlusIcon } from '@heroicons/react/24/outline';
import BeeTogetherContext from '../context/beeTogether';

function InviteModal() {
  const [show, setShow] = useState(false);
  const { hive } = useContext(BeeTogetherContext);

  if (!hive) {
    return null;
  }

  return (
    <>
      <button
        onClick={() => setShow(true)}
        type='button'
        className='disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none false false border text-white bg-gray-700 hover:bg-gray-600 border-gray-600 rounded-xl h-10 w-10 p-2 relative inline-flex items-center justify-center space-x-1 font-sans text-sm font-normal leading-5 no-underline outline-none transition-all duration-300'>
        <PlusIcon />
      </button>

      <div
        className={`${
          !show ? 'hidden' : ''
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal h-full bg-black/90 flex flex-col items-center justify-center`}>
        <div className='relative w-full max-w-2xl h-auto'>
          <div className='relative bg-endnightshadow '>
            <div className='fixed top-0 right-0'>
              <button
                onClick={() => setShow(false)}
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-xl text-sm p-4 ml-auto inline-flex items-center '
                data-modal-toggle='defaultModal'>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'></path>
                </svg>
                <span>Close</span>
              </button>
            </div>
            <div className='flex flex-col justify-between items-center '>
              <h3 className='text-xl font-semibold text-center py-6'>Invite new member</h3>
              <InviteMember hiveAddress={hive.address} signature='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InviteModal;
