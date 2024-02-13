import { ReactElement } from 'react';
import { ChatHeader } from '../ChatHeader/ChatHeader';
import { ChatInput } from '../ChatInput/ChatInput';
import { DisplayMessages } from '../DisplayMessages/DisplayMessages';
import { useChat } from '../../hooks/useChat';
import { useMessages } from '../../hooks/useMessages';

export const ChatSection: React.FC<{
  className?: string;
  groupId?: string;
  userId?: string;
}> = ({ className, groupId, userId }): ReactElement => {
  const { chat } = useChat(userId, groupId);
  const { messages } = useMessages(userId, groupId);

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
            className="overflow-scroll border"
          />
          <ChatInput />
        </>
      ) : (
        <p>Beim Anzeigen des Chats ist ein Problem aufgetreten.</p>
      )}
    </div>
  );
};
