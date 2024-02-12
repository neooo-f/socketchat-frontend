import { ReactElement } from 'react';
import { ChatHeader } from '../ChatHeader/ChatHeader';
import { ChatInput } from '../ChatInput/ChatInput';
import { DisplayMessages } from '../DisplayMessages/DisplayMessages';

export const ChatSection: React.FC<{ className?: string }> = ({
  className,
}): ReactElement => {
  return (
    <div className={className}>
      {/* TODO: set other background color for header */}
      <ChatHeader
        className="flex items-center p-2 sm:p-4 justify-between border-b border-white"
        toUserName="Reto"
      />
      <DisplayMessages /* className="border rounded" */ />
      <ChatInput />
    </div>
  );
};
