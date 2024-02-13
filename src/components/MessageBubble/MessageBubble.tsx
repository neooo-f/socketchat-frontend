import { ReactElement } from 'react';

export const MessageBubble: React.FC<{
  className?: string;
  content: string;
  isIncoming: boolean;
  name?: string;
  time: string;
}> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className,
  content,
  isIncoming,
  name,
  time,
}): ReactElement => {
  return (
    <div
      className={`flex ${
        isIncoming ? 'justify-start ml-11' : 'justify-end mr-11'
      }`}
    >
      <div
        className={`text-white p-3 rounded-lg mb-2 w-[40%] ${
          isIncoming ? 'bg-gray-600' : 'bg-blue-500'
        }`}
      >
        <p>{content}</p>
        <p className="text-sm text-gray-300">
          {name && name + ' - '}
          {time}
        </p>
      </div>
    </div>
  );
};
