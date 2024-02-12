import { ReactElement } from 'react';

export const ChatInput: React.FC<{ className?: string }> = ({
  className,
}): ReactElement => {
  return (
    <div className={className + 'flex flex-row mb-5'}>
      <input
        type="text"
        className="flex-1 rounded-l-lg p-2 focus:outline-none focus:border-blue-500 bg-gray-600 text-white w-[80%]"
        placeholder="Type..."
      />
      <button className="bg-blue-500 text-white rounded-r-lg px-4 py-2 hover:bg-blue-600 focus:outline-none">
        Send
      </button>
    </div>
  );
};
