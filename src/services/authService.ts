import { UserType } from '../types/user-type';
import { fetch } from './fetch';

// TODO: type entire file correctly!
export const login = async (request: {
  username: string;
  password: string;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return fetch<any>(
    'auth/login',
    'POST',
    request,
    undefined,
    undefined,
    undefined,
    undefined,
    false,
  );
};

export const register = async (newUser: Omit<UserType, 'id'>, file?: File) => {
  const formData = new FormData();
  file && formData.append('file', file);
  formData.append('username', newUser.username);
  formData.append('password', newUser.password);
  formData.append('firstName', newUser.firstName);
  formData.append('lastName', newUser.lastName);
  formData.append('gender', newUser.gender);
  formData.append('dateOfBirth', newUser.dateOfBirth);
  newUser.biography && formData.append('biography', newUser.biography);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return fetch<any>(
    'auth/register',
    'POST',
    formData,
    undefined,
    undefined,
    undefined,
    undefined,
    false,
  );
};
