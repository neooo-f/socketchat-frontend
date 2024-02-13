import { ReactElement } from 'react';
import testImage from '../../assets/testimage.jpeg';

export const ChatCard: React.FC<{
  className?: string;
  imageUrl: string | null;
  name: string;
  unreadMessages: number;
  groupId?: string;
  userId?: string;
  onClick: (userId?: string, groupId?: string) => void;
}> = ({
  className,
  imageUrl,
  name,
  unreadMessages,
  groupId,
  userId,
  onClick,
}): ReactElement => {
  return (
    <div
      className={`flex items-center p-2 sm:p-4 rounded-lg cursor-pointer ${className}`}
      style={{ backgroundColor: '#242424' }}
      onClick={() => {
        if (groupId) {
          onClick(undefined, groupId);
        }

        if (userId) {
          onClick(userId);
        }
      }}
    >
      <img
        src={imageUrl ? imageUrl : /* '' */ testImage}
        alt="Profilbild"
        className="rounded-full w-12 h-12 object-cover mr-2 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
      />

      <div className="flex-1">
        <h2 className="text-md font-bold sm:text-lg md:text-xl lg:text-md xl:text-lg">
          {name}
        </h2>
      </div>

      <div className="flex items-center">
        <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-6 lg:h-6 xl:w-8 xl:h-8">
          {String(unreadMessages)}
        </div>
      </div>
    </div>
  );
};
