import { fetch } from './fetch';
import { MessageType } from "../types/message-type";

export const getSingleMessages = async (userId: string) => {
    return fetch<MessageType[]>('/messages', 'GET', undefined, undefined, undefined, { userId: userId });
}

export const getGroupMessages = async (groupId: string) => {
    return fetch<MessageType[]>('/messages', 'GET', undefined, undefined, undefined, { groupId: groupId });
}
