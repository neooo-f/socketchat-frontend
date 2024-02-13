import { useEffect, useState } from 'react';
import { ChatType } from '../types/chat-type';
import { getGroupChat, getSingleChat } from '../services/chatService';

type UseChatType = {
  chat?: ChatType;
  // isLoading: boolean;
};

export const useChat = (userId?: string, groupId?: string): UseChatType => {
  const [chat, setChat] = useState<ChatType>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (groupId) {
          const { data } = await getGroupChat(groupId);
          console.log(data);
          setChat(data);
        }

        if (userId) {
          const { data } = await getSingleChat(userId);
          console.log(data);
          setChat(data);
        }
      } catch (error) {
        console.error('Fehler beim Abrufen des Chat:', error);
      }
    };

    fetchData();
  }, [userId, groupId]);

  return {
    chat,
  };
};
