import { ReactElement } from 'react';
import { MessageBubble } from '../MessageBubble/MessageBubble';

export const DisplayMessages: React.FC<{ className?: string }> = ({
  className,
}): ReactElement => {
  return (
    <div className={className + 'flex flex-col space-y-2'}>
      <MessageBubble
        isIncomming={true}
        message="Hoi Ruedi, wie geits?"
        name="Peter"
        time="19:00"
      />
      <MessageBubble
        isIncomming={false}
        message="Guet, danke! Und dir Peter?"
        time="20:00"
      />
      <MessageBubble
        isIncomming={true}
        message="Ja danke au gut"
        name="Peter"
        time="20:03"
      />
    </div>
  );
};
