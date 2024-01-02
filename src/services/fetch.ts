import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
  RawAxiosRequestHeaders,
} from 'axios';

export const getToken = async (): Promise<string | null> => {
    const access_token = sessionStorage.getItem('access_token');

    if (access_token) {
        return access_token;
    } else {
        return null;
    }
};

const getDefaultHeaders = (
  token: string | null,
  withCredentials: boolean,
): Partial<RawAxiosRequestHeaders> => {
  return {
    Accept: 'application/json',
    Authorization: withCredentials ? (token ? `Bearer ${token}` : '') : null,
  };
};

const instance: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL + '/api/',
  withCredentials: true,
});

export const buildUrl = (endpoint: string): string =>
  `${process.env.BASE_URL}/api/${endpoint}`;

export const fetch = async <T>(
  url: string,
  method: Method,
  body?: unknown,
  options?: Partial<AxiosRequestConfig>,
  headers?: Partial<RawAxiosRequestHeaders>,
  baseURL = process.env.BASE_URL + '/api/',
  withCredentials = true,
): Promise<AxiosResponse<T>> => {
  if (!url) {
    throw new Error('No url defined');
  }

  const token = await getToken();

  const defaultHeaders = getDefaultHeaders(token, withCredentials);

  const otherHeaders: Partial<RawAxiosRequestHeaders> =
    options && options.headers
      ? (options.headers as Partial<RawAxiosRequestHeaders>)
      : {};

  return instance.request({
    url,
    method,
    baseURL,
    withCredentials,
    headers: { ...defaultHeaders, ...otherHeaders, ...headers },
    data: body,
    ...options,
  });
};
