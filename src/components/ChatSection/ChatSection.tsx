import { ReactElement, useContext, useEffect } from 'react';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import { ChatHeader } from '../ChatHeader/ChatHeader';
import { ChatInput } from '../ChatInput/ChatInput';
import { DisplayMessages } from '../DisplayMessages/DisplayMessages';
import { useChat } from '../../hooks/useChat';
import { useMessages } from '../../hooks/useMessages';
import io from 'socket.io-client';

export const ChatSection: React.FC<{
  className?: string;
  groupId?: string;
  userId?: string;
}> = ({ className, groupId, userId }): ReactElement => {
  const { chat } = useChat(userId, groupId);
  const { messages, setFilter } = useMessages(userId, groupId);
  const { user } = useContext(AuthContext);

  const socket = io('http://127.0.0.1:3001', {
    query: {
      userId: user!.id,
    },
    transports: ['websocket'],
  });

  socket.on('connect_error', (err) => {
    console.log(`connect_error due to ${err.message}`);
  });

  useEffect(() => {
    // Event-Handler zum Empfangen von Nachrichten vom Server
    socket.on('privateMessage', (message) => {
      // setMessages(prevMessages => [...prevMessages, message]);
      console.log('INCOMMING MESSAGE', message);
    });

    // Cleanup-Funktion zum Trennen des Sockets bei unmounting
    return () => {
      socket.disconnect();
    };
  });

  const sendMessage = (inputMessage: string) => {
    const receiverId = 'cbab1e58-bea2-43bc-a803-46e7c63967df'; // Empfänger-ID hier einfügen
    socket.emit('privateMessage', {
      toUserId: receiverId,
      content: inputMessage,
    });
    // setInputMessage('');
  };

  const handleClick = () => {
    console.log('message sent');
    // TODO: call function that sends message
    sendMessage('DIE ERSTI NACHRICHT VOM BUTTON UEBER PRISMA!!!!');
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
