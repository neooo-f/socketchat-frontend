import { ReactElement } from 'react';

export const MessageBubble: React.FC<{
  className?: string;
  message: string;
  isIncomming: boolean;
  name?: string;
  time: string;
}> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className,
  message,
  isIncomming,
  name,
  time,
}): ReactElement => {
  return (
    <div
      className={`flex ${
        isIncomming ? 'justify-start ml-11' : 'justify-end mr-11'
      }`}
    >
      <div
        className={`text-white p-3 rounded-lg mb-2 w-[40%] ${
          isIncomming ? 'bg-gray-600' : 'bg-blue-500'
        }`}
      >
        <p>{message}</p>
        <p className="text-sm text-gray-300">
          {name && name + ' - '}
          {time}
        </p>
      </div>
    </div>
  );
};
