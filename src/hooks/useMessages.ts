import { useEffect, useState } from 'react';
import { MessageType } from '../types/message-type';
import { getGroupMessages, getSingleMessages } from '../services/messageService';

type UseMessagesType = {
  messages?: MessageType[];
  setFilter: React.Dispatch<React.SetStateAction<{ take: number, skip: number }>>;
  hasMore: boolean;
  // isLoading: boolean;
};

export const useMessages = (userId?: string, groupId?: string): UseMessagesType => {

  const [filter, setFilter] = useState<{ take: number; skip: number }>({
    take: 15,
    skip: 0,
  });
  const [messages, setMessages] = useState<MessageType[]>();
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (groupId) {
          const { data } = await getGroupMessages(groupId, filter.take, filter.skip);
          setHasMore(data.length > 0);
          console.log(data);
          setMessages(data);
        }

        if (userId) {
          const { data } = await getSingleMessages(userId, filter.take, filter.skip);
          console.log(data);
          setMessages(data);
        }
      } catch (error) {
        console.error('Fehler beim Abrufen der Nachrichten:', error);
      }
    };

    fetchData();
  }, [userId, groupId]);

  return {
    messages,
    setFilter,
    hasMore
  };
};
