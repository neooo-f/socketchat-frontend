import { ReactElement } from 'react';
import { useChats } from '../../hooks/useChats';
import { ChatCard } from '../ChatCard/ChatCard';

export const ChatList: React.FC<{ className?: string }> = ({
  className,
}): ReactElement => {
  const { chats } = useChats();

  return (
    <div className={className}>
      {chats?.map((chat, index) => (
        <ChatCard
          className="mt-2 mb-2"
          key={index}
          imageUrl={chat.profileImageUrl}
          name={chat.name}
          unreadMessages={chat.unreadMessages}
        />
      )) || null}
    </div>
  );
};
