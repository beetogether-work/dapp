import Image from 'next/image';

function PublicHive() {
  return (
    <>
      <div className='-ml-6 -mr-6 -mt-6 p-6 pb-0 bg-endnight'>
        <div className='relative flex w-full flex-col lg:flex-row '>
          <div className='relative z-10 flex w-full flex-col gap-4 lg:flex-row'>
            <div className='relative inline-flex shrink-0 items-center justify-center outline-none h-28 w-28 rounded-full ltablet:mx-0 mx-auto lg:mx-0'>
              <div className='flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full'>
                <Image
                  className='max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-28 w-28'
                  alt=''
                  src={`/images/default-avatar-1.jpeg`}
                  width={112}
                  height={112}
                />
              </div>
              <div className='dark:bg-gray-800 absolute z-10 block overflow-hidden rounded-full bg-white h-10 w-10 bottom-0 end-0'>
                <Image
                  className='relative h-full w-full scale-90 rounded-full object-cover'
                  alt=''
                  src={`/images/default-avatar-2.jpeg`}
                  width={112}
                  height={112}
                />
              </div>
            </div>
            <div className='ltablet:text-left text-center lg:text-left'>
              <h2 className='font-heading text-xl font-semibold leading-normal ltablet:justify-start flex items-center justify-center gap-2 lg:justify-start'>
                <span className='text-gray-800 dark:text-white'>Sweet Mango</span>
                <svg
                  data-v-cd102a71
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  aria-hidden='true'
                  role='img'
                  className='icon h-4 w-4 text-yellow-400'
                  width='1em'
                  height='1em'
                  viewBox='0 0 20 20'>
                  <path
                    fill='currentColor'
                    d='m9.89 17.514l-4.21 2.257l-.099.044c-.715.27-1.39.216-1.903-.242c-.482-.43-.657-1.046-.557-1.755l.704-4.86l-3.18-3.342c-.55-.56-.765-1.248-.58-1.968c.205-.799.88-1.258 1.851-1.412l4.227-.638l2.213-4.585C8.7.366 9.236-.017 9.911.001c.66.017 1.183.422 1.593 1.143l2.14 4.486l4.74.658c.753.13 1.308.522 1.53 1.176c.22.653.01 1.313-.557 1.987l-3.44 3.51l.772 4.856c.122.84-.025 1.505-.586 1.9c-.506.357-1.139.357-1.867.107l-.12-.053l-4.226-2.257Z'
                  />
                </svg>
              </h2>
              <span className='text-gray-400 mb-4 block font-sans text-base'>UI-UX web3</span>
              <div className='mb-6 flex items-center gap-x-6'>
                <div className='ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row'>
                  <span className='text-gray-800 dark:text-gray-100 font-semibold'> 5 </span>
                  <span className='text-gray-400 ltablet:text-base text-xs sm:text-sm lg:text-base'>
                    {' '}
                    Members{' '}
                  </span>
                </div>
                <div className='ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row'>
                  <span className='text-gray-800 dark:text-gray-100 font-semibold'> 121 </span>
                  <span className='text-gray-400 ltablet:text-base text-xs sm:text-sm lg:text-base'>
                    {' '}
                    Gigs done{' '}
                  </span>
                </div>
                <div className='ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row'>
                  <span className='text-gray-800 dark:text-gray-100 font-semibold'> 329 </span>
                  <span className='text-gray-400 ltablet:text-base text-xs sm:text-sm lg:text-base'>
                    {' '}
                    Lens followers{' '}
                  </span>
                </div>
              </div>
              <div className='ltablet:justify-start flex justify-center gap-4 lg:justify-start'>
                <div className='relative'>
                  <div data-headlessui-state className='relative'>
                    <div
                      className='group inline-flex cursor-pointer font-sans focus:outline-none'
                      id='headlessui-popover-button-41'
                      aria-expanded='false'
                      data-headlessui-state>
                      <div className='dark:bg-gray-700 shadow-gray-300/40 dark:shadow-gray-900/20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl'>
                        <div className='bg-danger-500/20 flex h-8 w-8 items-center justify-center rounded-full'>
                          <svg
                            data-v-cd102a71
                            xmlns='http://www.w3.org/2000/svg'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            aria-hidden='true'
                            role='img'
                            className='icon text-danger-500 h-5 w-5'
                            width='1em'
                            height='1em'
                            viewBox='0 0 24 24'>
                            <path
                              fill='currentColor'
                              d='M12 23a7.5 7.5 0 0 1-5.138-12.963C8.204 8.774 11.5 6.5 11 1.5c6 4 9 8 3 14c1 0 2.5 0 5-2.47c.27.773.5 1.604.5 2.47A7.5 7.5 0 0 1 12 23Z'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='relative'>
                  <div data-headlessui-state className='relative'>
                    <div
                      className='group inline-flex cursor-pointer font-sans focus:outline-none'
                      id='headlessui-popover-button-46'
                      aria-expanded='false'
                      data-headlessui-state>
                      <div className='dark:bg-gray-700 shadow-gray-300/40 dark:shadow-gray-900/20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl'>
                        <div className='bg-success-500/20 flex h-8 w-8 items-center justify-center rounded-full'>
                          <svg
                            data-v-cd102a71
                            xmlns='http://www.w3.org/2000/svg'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            aria-hidden='true'
                            role='img'
                            className='icon text-success-500 h-5 w-5'
                            width='1em'
                            height='1em'
                            viewBox='0 0 24 24'>
                            <path
                              fill='currentColor'
                              d='M12 7a8 8 0 1 1 0 16a8 8 0 0 1 0-16Zm0 3.5l-1.322 2.68l-2.958.43l2.14 2.085l-.505 2.946L12 17.25l2.645 1.39l-.505-2.945l2.14-2.086l-2.958-.43L12 10.5Zm1-8.501L18 2v3l-1.363 1.138A9.935 9.935 0 0 0 13 5.05V1.999Zm-2 0v3.05a9.935 9.935 0 0 0-3.636 1.088L6 5V2l5-.001Z'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='relative'>
                  <div data-headlessui-state className='relative'>
                    <div
                      className='group inline-flex cursor-pointer font-sans focus:outline-none'
                      id='headlessui-popover-button-51'
                      aria-expanded='false'
                      data-headlessui-state>
                      <div className='dark:bg-gray-700 shadow-gray-300/40 dark:shadow-gray-900/20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl'>
                        <div className='flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500/20'>
                          <svg
                            data-v-cd102a71
                            xmlns='http://www.w3.org/2000/svg'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            aria-hidden='true'
                            role='img'
                            className='icon h-5 w-5 text-yellow-500'
                            width='1em'
                            height='1em'
                            viewBox='0 0 24 24'>
                            <path
                              fill='currentColor'
                              d='M13.005 16.941v2.062h5v2h-12v-2h5V16.94a8.001 8.001 0 0 1-7-7.938v-6h16v6a8.001 8.001 0 0 1-7 7.938Zm-12-11.938h2v4h-2v-4Zm20 0h2v4h-2v-4Z'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center mt-4'>
            <button
              data-v-71bb21a6
              type='button'
              className='grow px-5 py-2 rounded-xl bg-redpraha text-white'>
              <span>Follow</span>
            </button>
          </div>
        </div>

        <div className='mt-6 items-end gap-2'>
          <button
            type='button'
            className='inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm border-primary-500 text-gray-800 dark:text-gray-100'>
            <span>Information</span>
          </button>
          <button
            type='button'
            className='inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm border-transparent text-gray-400'>
            <span>Gigs completed</span>
          </button>
        </div>
      </div>
      <div className=''>
        <div>
          <div className='pt-6'>
            <p className='line-clamp-3 text-sm'>
              {' '}
              Shaping immersive digital experiences at the forefront of Web3 through exceptional
              UI-UX design.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PublicHive;
