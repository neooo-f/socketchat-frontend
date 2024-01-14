import { fetch } from './fetch';

export const login = async (request: { username: string, password: string }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return fetch<any>('auth/login', 'POST', request, undefined, undefined, undefined, false);
}

// TODO: add type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const register = async (request: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return fetch<any>('auth/register', 'POST', request, undefined, undefined, undefined, false);
}