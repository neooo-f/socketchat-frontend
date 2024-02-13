import { ReactElement } from 'react';
import { ChatHeader } from '../ChatHeader/ChatHeader';
import { ChatInput } from '../ChatInput/ChatInput';
import { DisplayMessages } from '../DisplayMessages/DisplayMessages';
import { useChat } from '../../hooks/useChat';

export const ChatSection: React.FC<{
  className?: string;
  groupId?: string;
  userId?: string;
}> = ({ className, groupId, userId }): ReactElement => {
  const { chat } = useChat(userId, groupId);

  return (
    <div className={className}>
      {/* TODO: set other background color for header */}
      {chat ? (
        <>
          <ChatHeader
            className="flex items-center p-2 sm:p-4 justify-between border-b border-white"
            toUserName={chat.name}
            imageUrl={chat.profileImageUrl}
          />
          <DisplayMessages /* className="border rounded" */ />
          <ChatInput />
        </>
      ) : (
        <p>Beim Anzeigen des Chats ist ein Problem aufgetreten.</p>
      )}
    </div>
  );
};
