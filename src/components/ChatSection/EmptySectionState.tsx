import { ReactElement } from 'react';

export const EmptySectionState: React.FC<{ className?: string }> = ({
  className,
}): ReactElement => {
  return (
    <div className={className}>
      <h1>Select a chat to communicate with your contacts...</h1>
    </div>
  );
};
