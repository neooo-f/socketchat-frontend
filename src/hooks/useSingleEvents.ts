import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { MessageType } from '../types/message-type';

type UseEventsType = {
  incomingMessage?: MessageType;
  sendMessage: (content: string, receiverId: string) => void;
};

export const useSingleEvents = (userId: string): UseEventsType => {
  const [incomingMessage, setIncomingMessage] = useState<MessageType>();
  const socket = io('import.meta.env.VITE_BASE_URL', {
    query: {
      userId: userId,
    },
    transports: ['websocket'],
  });

  useEffect(() => {
    socket.on('privateMessage', (message: MessageType) => {
      console.log('INCOMMING PRIVATE MESSAGE', message);
      setIncomingMessage(message);
    });

    return () => {
      socket.disconnect();
    };
  });

  const sendMessage = (content: string, receiverId: string) => {
    socket.emit('privateMessage', {
      toUserId: receiverId,
      content: content,
    });
  };

  return {
    incomingMessage,
    sendMessage,
  };
};
