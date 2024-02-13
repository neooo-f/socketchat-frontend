import { ReactElement } from 'react';
import { MessageBubble } from '../MessageBubble/MessageBubble';
import { MessageType } from '../../types/message-type';
import { getMessageTimeFromDateString } from '../../util/dateHelper';

export const DisplayMessages: React.FC<{
  className?: string;
  messages?: MessageType[];
}> = ({ className, messages }): ReactElement => {
  return (
    <div className={className + 'flex flex-col space-y-2'}>
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
