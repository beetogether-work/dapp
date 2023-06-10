import { watchAccount } from '@wagmi/core';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useSigner } from 'wagmi';
import Steps from '../../../components/Steps';
import BeeTogetherContext from '../../../context/beeTogether';
import CardHeader from '../../../modules/Messaging/components/CardHeader';
import ConversationList from '../../../modules/Messaging/components/ConversationList';
import { XmtpContext } from '../../../modules/Messaging/context/XmtpContext';
import useStreamConversations from '../../../modules/Messaging/hooks/useStreamConversations';

function MessagingIndex() {
  const { account } = useContext(BeeTogetherContext);
  const { data: signer } = useSigner({
    chainId: parseInt(process.env.NEXT_PUBLIC_NETWORK_ID as string),
  });
  const { providerState } = useContext(XmtpContext);

  // Listens to new conversations ? ==> Yes, & sets them in "xmtp context". Stream stops "onDestroy"
  useStreamConversations();

  const handleXmtpConnect = async () => {
    if (providerState && providerState.initClient && signer) {
      await providerState.initClient(signer);
    }
  };

  if (!account?.isConnected) {
    return <Steps />;
  }

  return (
    <div className='mx-auto text-gray-900 sm:px-4 lg:px-0'>
      {!providerState?.client && account && (
        <div className='flex items-center justify-center pt-16'>
          <button
            type='submit'
            className='bg-redpraha text-white font-bold py-2 px-4 rounded'
            onClick={() => handleXmtpConnect()}>
            Connect to Messaging
          </button>
        </div>
      )}
      {providerState?.client && (
        <div className='-mx-6 -mt-6'>
          <CardHeader />
          <div className='flex flex-col'>
            <ConversationList
              conversationMessages={providerState.conversationMessages}
              conversationsLoading={providerState.loadingConversations}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default MessagingIndex;
