export type CreateMessageType = {
  fromUserId: string;
  toUserId?: string;
  toGroupId?: string;
  content: string;
};
