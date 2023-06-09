import { QRCodeSVG } from 'qrcode.react';
import Logo from '../../components/Layout/Logo';
import LeftSide from '../../components/onboarding/LeftSide';
import { toast } from 'react-toastify';
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

function Success() {
  const shareLink = `https://www.beetogether.work/onboarding/invite`;
  const handleCopyClick = () => {
    navigator.clipboard.writeText(shareLink);
    toast('Link copied', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  return (
    <div>
      <div className='h-screen md:flex'>
        <LeftSide
          title='Almost there'
          subtext='Now you can build your deam team and invite everyone to join!'></LeftSide>

        <div className='flex flex-col items-center justify-between py-10 md:w-1/2'>
          <div className='mx-auto flex w-full max-w-xs items-center justify-between'>
            <a href='/' className='hover:text-primary-500 transition-colors duration-300 px-2'>
              <Logo />
            </a>
          </div>

          <div className='mx-auto w-full max-w-xs px-2 text-center'>
            <h2 className='font-heading text-3xl font-medium leading-normal pt-12 sm:pt-0'>
              Congrats!
            </h2>
            <p className='font-alt text-sm font-normal leading-normal text-gray-400 mb-6'>
              Now invite some team members!
            </p>

            <div className='flex flex-col justify-between items-center '>
              <a
                onClick={handleCopyClick}
                className='flex p-3 bg-endnight border-endnight rounded justify-between text-greeny'>
                Copy invite link
                <ClipboardDocumentIcon className='ml-2 h-5 w-5' />
              </a>
              <p className='mb-4 mt-4'>or</p>
              <div className='flex justify-center'>
                <QRCodeSVG
                  value={shareLink}
                  size={200}
                  bgColor='#ff0050'
                  fgColor='#0f172a'
                  level='L'
                  includeMargin={true}
                />
              </div>

              <p className='mt-4'>then</p>

              <Link
                href='/dashboard'
                className='mt-6 grow px-5 py-2 rounded-xl bg-redpraha text-white'>
                Go to your Hive dashboard
              </Link>
            </div>
          </div>

          <div className='text-center'>
            <p className='font-sans text-sm font-normal leading-normal text-gray-400 mt-10'>
              © 2023 BeeTogether. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
