import { ReactElement } from 'react';
import { ChatHeader } from '../ChatHeader/ChatHeader';
import { ChatInput } from '../ChatInput/ChatInput';
import { DisplayMessages } from '../DisplayMessages/DisplayMessages';
import { useChat } from '../../hooks/useChat';
import { useMessages } from '../../hooks/useMessages';
import { socketService } from '../../services/socketService';

export const ChatSection: React.FC<{
  className?: string;
  groupId?: string;
  userId?: string;
}> = ({ className, groupId, userId }): ReactElement => {
  const { chat } = useChat(userId, groupId);
  const { messages, setFilter } = useMessages(userId, groupId);

  // TODO: outsource later on in hook!
  socketService.connect();
  if (userId) {
    socketService.joinChat(userId, undefined);
  }

  if (groupId) {
    socketService.joinChat(undefined, groupId);
  }
  // socketService.joinChat(userId = userId, groupId);
  // console.log('userId ' + userId, 'groupId ' + groupId);

  const handleClick = () => {
    console.log('message sent');
    // socketService.sendMessage()
    // TODO: call function that sends message
  };

  return (
    <div className={className}>
      {chat ? (
        <>
          <ChatHeader
            className="flex items-center p-2 sm:p-4 justify-between border-b border-white"
            toUserName={chat.name}
            imageUrl={chat.profileImageUrl}
          />
          <DisplayMessages
            messages={messages}
            className="overflow-y-scroll flex flex-col space-y-2 pb-5 pt-3 no-scrollbar"
            setFilter={setFilter}
          />
          <ChatInput onClick={handleClick} />
        </>
      ) : (
        <p>Beim Anzeigen des Chats ist ein Problem aufgetreten.</p>
      )}
    </div>
  );
};
