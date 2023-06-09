import { ChevronLeft } from 'heroicons-react';
import { useRouter } from 'next/router';
import { truncateAddress } from '../../../utils';
import ShareModal from './ShareModal';
import SearchModal from './SearchModal';

interface ICardHeaderProps {
  peerAddress?: string;
}
const CardHeader = ({ peerAddress }: ICardHeaderProps) => {
  const router = useRouter();

  return (
    <div className='flex flex-row text-white'>
      <div className='flex  py-2 px-4 items-center border-b w-full border-gray-700'>
        {peerAddress && (
          <>
            <nav className='flex mr-5' aria-label='Back'>
              <ol className='inline-flex items-center space-x-1 md:space-x-3'>
                <li className=''>
                  <a
                    href='#'
                    onClick={() => router.back()}
                    className='text-sm font-medium text-gray-400 inline-flex items-center -ml-1 pr-5 py-2 border-r border-gray-700'>
                    <ChevronLeft />
                    Back
                  </a>
                </li>
              </ol>
            </nav>
            <p className='w-full h-full flex items-center text-xs'>
              To:
              <span className='pr-2'>{truncateAddress(peerAddress, 5)}</span>
            </p>
          </>
        )}
        {!peerAddress && (
          <>
            <p className='text-2xl font-medium flex-1'>Chats</p>

            <SearchModal />
            <ShareModal />
          </>
        )}
      </div>
    </div>
  );
};

export default CardHeader;
