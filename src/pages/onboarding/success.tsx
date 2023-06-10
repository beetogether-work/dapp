import { QRCodeSVG } from 'qrcode.react';
import Logo from '../../components/Layout/Logo';
import LeftSide from '../../components/onboarding/LeftSide';
import { toast } from 'react-toastify';
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import InviteMember from '../../components/InviteMember';

function Success() {
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

            <InviteMember />

            <p className='mt-4 mb-4'>then</p>

            <Link
              href='/dashboard'
              className='block mt-4 grow px-5 py-3 rounded-xl border-redpraha bg-endnight text-white'>
              Go to your Hive dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
