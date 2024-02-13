import { fetch } from './fetch';
import { ChatType } from '../types/chat-type';

export const getChats = async () => {
    return fetch<ChatType[]>('/chats', 'GET');
}

export const getSingleChat = async (userId: string) => {
    return fetch<ChatType>('/chat', 'GET', undefined, undefined, undefined, { userId: userId });
}

export const getGroupChat = async (groupId: string) => {
    return fetch<ChatType>('/chat', 'GET', undefined, undefined, undefined, { groupId: groupId });
}