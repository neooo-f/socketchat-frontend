import { ReactElement } from 'react';
import { ChatHeader } from '../ChatHeader/ChatHeader';

export const ChatSection: React.FC<{ className?: string }> = ({
  className,
}): ReactElement => {
  return (
    <div className={className}>
      <ChatHeader
        className="flex items-center p-2 sm:p-4 justify-between border border-solid border-white"
        toUserName="Reto"
      />
    </div>
  );
};
