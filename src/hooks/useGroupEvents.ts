import { useEffect } from 'react';
import io from 'socket.io-client';

type UseEventsType = {
  sendMessage: (content: string, groupId: string) => void;
};

export const useGroupEvents = (userId: string): UseEventsType => {
  const socket = io('import.meta.env.VITE_BASE_URL', {
    query: {
      userId: userId,
    },
    transports: ['websocket'],
  });

  useEffect(() => {
    socket.on;

    return () => {
      socket.disconnect();
    };
  });

  const sendMessage = (content: string, groupId: string) => {
    console.log(content, groupId);
    console.log('NOT IMPLEMENTED!');
  };

  return {
    sendMessage,
  };
};
