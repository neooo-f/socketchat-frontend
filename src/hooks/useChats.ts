import { useEffect, useState } from 'react';
import { ChatType } from '../types/chat-type';
import { getChats } from '../services/chatService';

type UseChatsType = {
  chats?: ChatType[];
  // isLoading: boolean;
};

export const useChats = (): UseChatsType => {
  const [chats, setChats] = useState<ChatType[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getChats();
        console.log(data);
        setChats(data);
      } catch (error) {
        console.error('Fehler beim Abrufen der Chats:', error);
      }
    };

    fetchData();
  }, []);

  return {
    chats,
  };
};
