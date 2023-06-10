import Image from 'next/image';
import InviteModal from '../../components/InviteModal';
import Steps from '../../components/Steps';
import TalentLayerContext from '../../context/talentLayer';
import { useContext } from 'react';
import { EyeIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

function Hive() {
  const { account } = useContext(TalentLayerContext);
  if (!account?.isConnected) {
    return <Steps />;
  }

  return (
    <div className='max-w-7xl mx-auto text-gray-200 sm:px-4 lg:px-0'>
      <div className='bg-redpraha rounded-xl px-6 py-6'>
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
              My hive
            </h2>
          </div>
          <div className='flex w-full flex-1 flex-col'>
            <h2 className='font-heading text-base font-semibold leading-tight mb-1 text-white'>
              <span>Members</span>
            </h2>
            <div className='mt-auto flex gap-2'>
              <div className='relative inline-flex shrink-0 items-center justify-center outline-none h-10 w-10'>
                <div className='flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300'>
                  <img
                    src={`/images/default-avatar-1.jpeg`}
                    className='max-h-full max-w-full object-cover shadow-sm border-transparent h-10 w-10 rounded-xl'
                  />
                </div>
              </div>
              <div className='relative inline-flex shrink-0 items-center justify-center outline-none h-10 w-10'>
                <div className='flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300'>
                  <img
                    src={`/images/default-avatar-2.jpeg`}
                    className='max-h-full max-w-full object-cover shadow-sm border-transparent h-10 w-10 rounded-xl'
                  />
                </div>
              </div>
              <div className='relative inline-flex shrink-0 items-center justify-center outline-none h-10 w-10'>
                <div className='flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300'>
                  <img
                    src={`/images/default-avatar-3.jpeg`}
                    className='max-h-full max-w-full object-cover shadow-sm border-transparent h-10 w-10 rounded-xl'
                  />
                </div>
              </div>
              <InviteModal />
            </div>
          </div>
        </div>
      </div>

      <div className='flex mt-4'>
        <Link
          href='/dashboard/hive/configure'
          className=' hover:bg-endnight text-white bg-endnight px-3 py-2 text-sm flex items-center mr-4 rounded-xl'>
          <PencilSquareIcon className='w-[18px] h-[18px] text-redpraha mr-2' />
          Configure
        </Link>
        <Link
          href='/dashboard/hive/1'
          className=' hover:bg-endnight text-white bg-endnight px-3 py-2 text-sm flex items-center mr-4 rounded-xl'>
          <EyeIcon className='w-[18px] h-[18px] text-redpraha mr-2' />
          Public page
        </Link>
      </div>

      <div className='flex flex-col justify-between gap-6 mt-6'>
        <div>
          <h3 className='font-heading text-lg font-semibold leading-tight text-gray-100 mb-1'>
            <span>Proposals</span>
          </h3>
        </div>
        <div className='flex gap-2 sm:justify-end'>
          <button
            type='button'
            className='inline-flex items-center justify-center text-sm h-8 px-3 py-2 space-x-1 border transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-white bg-redpraha border-white hover:enabled:bg-gray-50 active:enabled:bg-gray-700/70 active:enabled:bg-gray-100 rounded-xl'>
            All
          </button>
          <button
            type='button'
            className='inline-flex items-center justify-center text-sm h-8 px-3 py-2 space-x-1 border transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-white bg-gray-700 border-gray-700 hover:enabled:bg-gray-50 active:enabled:bg-gray-700/70 active:enabled:bg-gray-100 rounded-xl'>
            To vote
          </button>
          <button
            type='button'
            className='inline-flex items-center justify-center text-sm h-8 px-3 py-2 space-x-1 border transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-white bg-gray-700 border-gray-700 hover:enabled:bg-gray-50 active:enabled:bg-gray-700/70 active:enabled:bg-gray-100 rounded-xl'>
            In progress
          </button>
        </div>

        <div className='w-full'>
          <div className='flex flex-col'>
            <div className='border-gray-700 overflow-x-auto border rounded-md'>
              <div className='inline-block min-w-full align-middle'>
                <div className='overflow-hidden'>
                  <table className='divide-gray-200 dark:divide-gray-700 min-w-full table-fixed divide-y'>
                    <thead>
                      <tr>
                        <th className='text-gray-700 dark:text-gray-400 text-left font-sans font-semibold tracking-wider text-xs uppercase border-gray-200 dark:border-gray-700 last:border-e-none dark:bg-gray-800 border-r bg-white px-4 py-5'>
                          Work
                        </th>
                        <th className='text-gray-700 dark:text-gray-400 text-left font-sans font-semibold tracking-wider text-xs uppercase border-gray-200 dark:border-gray-700 last:border-e-none dark:bg-gray-800 border-r bg-white px-4 py-5'>
                          {' '}
                          Innitiator{' '}
                        </th>
                        <th className='text-gray-700 dark:text-gray-400 text-left font-sans font-semibold tracking-wider text-xs uppercase border-gray-200 dark:border-gray-700 last:border-e-none dark:bg-gray-800 border-r bg-white px-4 py-5'>
                          Status
                        </th>
                        <th className='text-gray-700 dark:text-gray-400 text-left font-sans font-semibold tracking-wider text-xs uppercase border-gray-200 dark:border-gray-700 last:border-e-none dark:bg-gray-800 border-r bg-white px-4 py-5'>
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-gray-200 dark:divide-gray-700 dark:bg-gray-800 divide-y bg-white'>
                      {/**/}
                      <tr className='hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-300'>
                        <td className='font-alt whitespace-nowrap text-sm text-gray-500 dark:text-white p-4'>
                          <a href='' className='underline'>
                            Solidity Security audit
                          </a>
                        </td>
                        <td className='font-alt whitespace-nowrap text-sm text-gray-800 dark:text-white p-4'>
                          <div className='flex items-center'>
                            <div className='relative inline-flex shrink-0 items-center justify-center outline-none h-10 w-10 rounded-full bg-indigo-500/20 text-indigo-500 mr-[6px]'>
                              <div className='flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full '>
                                <img
                                  src={`/images/default-avatar-3.jpeg`}
                                  className='max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-10 w-10'
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className='ms-3 leading-none'>
                              <h4 className='font-sans text-sm font-medium'>Miranda L.</h4>
                              <p className='text-gray-400 font-sans text-xs'>Software Engineer</p>
                            </div>
                          </div>
                        </td>

                        <td className='font-alt whitespace-nowrap text-sm text-gray-800 dark:text-white p-4 capitalize'>
                          <span className='inline-block px-3 font-sans transition-shadow duration-300 py-1 text-[0.65rem] rounded-full bg-info-100 text-info-500 border-info-100 dark:border-info-500 dark:text-info-500 border dark:bg-transparent font-medium'>
                            waiting vote
                          </span>
                        </td>
                        <td className='font-alt whitespace-nowrap text-sm text-gray-800 dark:text-white p-4'>
                          <button
                            type='button'
                            className='relative font-sans font-normal text-sm inline-flex items-center justify-center leading-5 no-underline h-8 px-3 py-2 space-x-1 border nui-focus transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:enabled:shadow-none text-gray-700 bg-white border-gray-300 dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:hover:enabled:bg-gray-600 hover:enabled:bg-gray-50 dark:active:enabled:bg-gray-700/70 active:enabled:bg-gray-100 rounded-md'>
                            Vote for
                          </button>
                        </td>
                      </tr>
                      <tr className='hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-300'>
                        <td className='font-alt whitespace-nowrap text-sm text-gray-500 dark:text-white p-4'>
                          <a href='' className='underline'>
                            Chat AI
                          </a>
                        </td>
                        <td className='font-alt whitespace-nowrap text-sm text-gray-800 dark:text-white p-4'>
                          <div className='flex items-center'>
                            <div className='relative inline-flex shrink-0 items-center justify-center outline-none h-10 w-10 rounded-full bg-indigo-500/20 text-indigo-500 mr-[6px]'>
                              <div className='flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full '>
                                <img
                                  src={`/images/default-avatar-1.jpeg`}
                                  className='max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-10 w-10'
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className='ms-3 leading-none'>
                              <h4 className='font-sans text-sm font-medium'>Trevor</h4>
                              <p className='text-gray-400 font-sans text-xs'>AI Engineer</p>
                            </div>
                          </div>
                        </td>

                        <td className='font-alt whitespace-nowrap text-sm text-gray-800 dark:text-white p-4 capitalize'>
                          <span className='inline-block px-3 font-sans transition-shadow duration-300 py-1 text-[0.65rem] rounded-full bg-info-100 text-info-500 border-info-100 dark:border-info-500 dark:text-info-500 border dark:bg-transparent font-medium'>
                            waiting vote
                          </span>
                        </td>
                        <td className='font-alt whitespace-nowrap text-sm text-gray-800 dark:text-white p-4'>
                          <button
                            type='button'
                            className='relative font-sans font-normal text-sm inline-flex items-center justify-center leading-5 no-underline h-8 px-3 py-2 space-x-1 border nui-focus transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:enabled:shadow-none text-gray-700 bg-white border-gray-300 dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:hover:enabled:bg-gray-600 hover:enabled:bg-gray-50 dark:active:enabled:bg-gray-700/70 active:enabled:bg-gray-100 rounded-md'>
                            Vote for
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hive;
