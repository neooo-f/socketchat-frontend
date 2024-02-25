import { CreateMessageType } from './create-message-type';
// mport { SocketMessageType } from "./socket-message.type"

export type ServerToClientEvents = {
  message: (data: CreateMessageType) => void;
  /// isTyping: (name: string) => void;
};

export type ClientToServerEvents = {
  message: (data: CreateMessageType) => void;
  join: (userId?: string, groupId?: string) => void;
  leave: (userId?: string, groupId?: string) => void;
  // isTyping: (roomId: number) => void;
};
