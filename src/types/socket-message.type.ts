export type SocketMessageType = {
  id: string;
  senderId: string; // (userId)
  toUserId: string;
  toGroupId: string;
  content: string;
};
