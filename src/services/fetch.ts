// import axios, {
//   AxiosInstance,
//   AxiosRequestConfig,
//   AxiosResponse,
//   Method,
//   RawAxiosRequestHeaders,
// } from 'axios';

// // import userManager from '../auth/userManager';

// // import config from '../config';

// // import i18next from '../i18n';

// export const getToken = async (): Promise<string | null> => {
//   const custom_token = sessionStorage.getItem('access_token');

//   if (custom_token) {
//     return custom_token;
//   } else {
//     const user = await userManager.getUser();

//     if (!user) {
//       return null;
//     }

//     return user.access_token;
//   }
// };

// const getDefaultHeaders = (
//   token: string | null,
//   withCredentials: boolean,
// ): Partial<RawAxiosRequestHeaders> => {
//   return {
//     Accept: 'application/json',
//     'Accept-Language': i18next.language,
//     Authorization: withCredentials ? (token ? `Bearer ${token}` : '') : null,
//   };
// };

// const instance: AxiosInstance = axios.create({
//   baseURL: config.remoteUrl + '/api/',
//   withCredentials: true,
// });

// export const buildUrl = (endpoint: string): string =>
//   `${config.remoteUrl}/api/${endpoint}`;

// export const fetch = async <T>(
//   url: string,
//   method: Method,
//   body?: unknown,
//   options?: Partial<AxiosRequestConfig>,
//   headers?: Partial<RawAxiosRequestHeaders>,
//   baseURL = config.remoteUrl + '/api/',
//   withCredentials = true,
// ): Promise<AxiosResponse<T>> => {
//   if (!url) {
//     throw new Error('No url defined');
//   }

//   const token = await getToken();

//   const defaultHeaders = getDefaultHeaders(token, withCredentials);

//   const otherHeaders: Partial<RawAxiosRequestHeaders> =
//     options && options.headers
//       ? (options.headers as Partial<RawAxiosRequestHeaders>)
//       : {};

//   return instance.request({
//     url,
//     method,
//     baseURL,
//     withCredentials,
//     headers: { ...defaultHeaders, ...otherHeaders, ...headers },
//     data: body,
//     ...options,
//   });
// };
