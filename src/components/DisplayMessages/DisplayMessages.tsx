import { ReactElement } from 'react';
import { MessageBubble } from '../MessageBubble/MessageBubble';
import { MessageType } from '../../types/message-type';
import { getMessageTimeFromDateString } from '../../util/dateHelper';

export const DisplayMessages: React.FC<{
  className?: string;
  messages?: MessageType[];
  setFilter: React.Dispatch<
    React.SetStateAction<{ take: number; skip: number }>
  >;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
}> = ({ className, messages, setFilter }): ReactElement => {
  // const hasMore = true;

  // const observer = useRef<IntersectionObserver | null>();
  // const lastMessageElementRef = useCallback(
  //   (node: Element | null): void => {
  //     // if (loading) return
  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && hasMore) {
  //         setFilter((prevFilter) => ({
  //           take: prevFilter.take,
  //           skip: prevFilter.skip + 15,
  //         }));
  //         console.log('load more!!');
  //       }
  //     });
  //     if (node) observer.current.observe(node);
  //   },
  //   [hasMore],
  // );

  return (
    <div className={className}>
      {messages?.map((message, index) => (
        <MessageBubble
          key={index}
          content={message.content}
          isIncoming={message.isIncoming}
          name={message.isIncoming ? message.firstName : undefined}
          time={getMessageTimeFromDateString(message.createdAt)}
        />
      )) || null}
    </div>
  );
};
