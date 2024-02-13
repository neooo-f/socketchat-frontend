import { useEffect } from "react";
import { MessageType } from "../types/message-type"

type UseMessagesType = {
    messages?: MessageType[];
    // isLoading: boolean;
}

export const useMessages = (): UseMessagesType => {
    // TODO: implement paginated loading (loadmore, load at scroll to the top etc.)
   //  const [messages, setMessages] = useState<MessageType[]>();

    useEffect(() => {
        const fetchData = async () => {
          try {
            // const { data } = await getChats();
            // console.log(data);
            // setMessages(data);
          } catch (error) {
            console.error('Fehler beim Abrufen der Nachrichten:', error);
          }
        };
    
        fetchData();
      }, []);

    return {
        // messages
    }
}