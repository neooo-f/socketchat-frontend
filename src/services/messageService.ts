import { fetch } from './fetch';
import { MessageType } from '../types/message-type';

export const getSingleMessages = async (
  userId: string,
  take: number,
  skip: number,
) => {
  return fetch<MessageType[]>(
    '/messages',
    'GET',
    undefined,
    undefined,
    undefined,
    { userId: userId, take: take.toString(), skip: skip.toString() },
  );
};

export const getGroupMessages = async (
  groupId: string,
  take: number,
  skip: number,
) => {
  return fetch<MessageType[]>(
    '/messages',
    'GET',
    undefined,
    undefined,
    undefined,
    { groupId: groupId, take: take.toString(), skip: skip.toString() },
  );
};
