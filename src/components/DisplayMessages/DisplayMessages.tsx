import { ReactElement } from 'react';
import { MessageBubble } from '../MessageBubble/MessageBubble';

export const DisplayMessages: React.FC<{ className?: string }> = ({
  className,
}): ReactElement => {
  return (
    <div className={className + 'flex flex-col space-y-2'}>
      <MessageBubble isIncomming={true} message="Hoi Ruedi, wie geits?" />
      <MessageBubble isIncomming={false} message="Gut, danke! Und dir?" />
      <MessageBubble isIncomming={true} message="Ja danke auch gut" />
    </div>
  );
};
