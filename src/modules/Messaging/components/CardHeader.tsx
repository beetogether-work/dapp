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
