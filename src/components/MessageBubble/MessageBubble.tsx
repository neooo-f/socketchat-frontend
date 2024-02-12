import { ReactElement } from 'react';

export const MessageBubble: React.FC<{
  className?: string;
  message: string;
  isIncomming: boolean;
}> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className,
  message,
  isIncomming,
}): ReactElement => {
  return (
    <div
      className={`flex ${
        isIncomming ? 'justify-start ml-11' : 'justify-end mr-11'
      }`}
    >
      <div
        className={`text-white p-3 rounded-lg mb-2 w-[40%] ${
          isIncomming ? 'bg-blue-500' : 'bg-gray-600'
        }`}
      >
        <p>{message}</p>
      </div>
    </div>
  );
};
