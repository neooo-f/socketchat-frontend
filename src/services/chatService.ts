import { fetch } from './fetch';
import { ChatType } from '../types/chat-type';

export const getChats = async () => {
    return fetch<ChatType[]>('/chats', 'GET');
}