import { UserType } from '../types/user-type';
import { fetch } from './fetch';

export const getProfile = async () => {
  return fetch<UserType>('/me', 'GET');
};
