import { QRCodeSVG } from 'qrcode.react';
import { toast } from 'react-toastify';
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';

function InviteMember({ hiveAddress, signature }: { hiveAddress: string; signature: string }) {
  const shareLink = `https://www.beetogether.work/onboarding/invite?address=${hiveAddress}&code=${signature}`;
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
    <div className='flex flex-col justify-between items-center '>
      <a
        onClick={handleCopyClick}
        className='flex p-3 bg-endnight border-endnight rounded justify-between text-greeny cursor-pointer'>
        Copy invite link
        <ClipboardDocumentIcon className='ml-2 h-5 w-5' />
      </a>
      <p className='mb-4 mt-4'>or</p>
      <div className='flex justify-center rounded-xl overflow-hidden'>
        <QRCodeSVG
          value={shareLink}
          size={200}
          bgColor='#ff0050'
          fgColor='#0f172a'
          level='L'
          includeMargin={true}
          radius={20}
        />
      </div>
    </div>
  );
}

export default InviteMember;
