// import { io, Socket } from "socket.io-client";
// import { ClientToServerEvents, ServerToClientEvents } from "../types/event.type";
// import { CreateMessageType } from "../types/create-message-type";

// class SocketService {
//   private readonly socket: Socket<ServerToClientEvents, ClientToServerEvents> =
//     io(import.meta.env.VITE_BASE_WS_URL, {
//       autoConnect: false,
//     });

//   // connectWithAuthToken(token: string) {
//   //   this.socket.auth = { token };
//   //   this.socket.connect();
//   // }
//   connect() {
//     this.socket.connect();
//   }

//   disconnect() {
//     this.socket.disconnect();
//   }

//   sendMessage(data: CreateMessageType) {
//     this.socket.emit("message", data);
//   }

//   // notifyTyping(roomId: number) {
//   //   this.socket.emit("isTyping", roomId);
//   // }

//   subscribeToMessages(messageHandler: ServerToClientEvents["message"]) {
//     console.log('user listener to messages');
//     this.socket.on("message", messageHandler);
//   }

//   // subscribeToTypingNotifications(
//   //   typingNotificationsHandler: ServerToClientEvents["isTyping"]
//   // ) {
//   //   this.socket.on("isTyping", typingNotificationsHandler);
//   // }

//   joinChat(userId?: string, groupId?: string) {
//     console.log(userId, groupId);
//     this.socket.emit("join", userId, groupId);
//   }

//   leaveChat(userId?: string, groupId?: string) {
//     this.socket.emit("leave", userId, groupId);
//   }
// }

// export const socketService = new SocketService();
