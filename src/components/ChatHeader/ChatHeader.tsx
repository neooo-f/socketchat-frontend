import { ReactElement } from 'react';
import testImage from '../../assets/testimage.jpeg';

export const ChatHeader: React.FC<{
  className?: string;
  toUserName: string;
}> = ({ className, toUserName }): ReactElement => {
  return (
    <div className={className}>
      <div className="flex items-center">
        <img
          //src={imageUrl ? imageUrl : /* '' */ testImage}
          src={testImage}
          alt="Profilbild"
          className="rounded-full w-12 h-12 object-cover mr-2 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
        />
        <h3 className="text-md font-bold sm:text-lg md:text-xl lg:text-md xl:text-lg">
          {toUserName}
        </h3>
      </div>

      <div className="flex items-center">
        <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-6 lg:h-6 xl:w-8 xl:h-8">
          {/*String(unreadMessages)*/ 'i'}
        </div>
      </div>
    </div>
  );
};
