import axios from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';

import { DEVELOPMENT_HOST, PRODUCTION_HOST } from '@/constants';
import { isProduction } from './Platform';

// === Constants ===
const Timeout = 15 * 1000;

const ApiEndpoint = isProduction() ? PRODUCTION_HOST : DEVELOPMENT_HOST;

const baseConfig = {
  timeout: Timeout,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

// === Client Creator ===
const requestInterceptor = (config) => {
  if (config.data instanceof Object) {
    config.data = decamelizeKeys(config.data);
  }
  if (config.params instanceof Object) {
    config.params = decamelizeKeys(config.params);
  }
  return config;
};

const successResponseInterceptor = (response) => {
  if (response.data instanceof Object) {
    response.data = camelizeKeys(response.data);
  }
  return { response };
};

const errorResponseInterceptor = (error) => {
  if (error.response && error.response.data instanceof Object) {
    error.response.data = camelizeKeys(error.response.data);
  }

  if (error.response.status === 401) {
    window.location.href = '/';
  }

  return { error };
};

export function createClient(config) {
  const mergedConfig = { ...baseConfig, ...config };
  const client = axios.create(mergedConfig);
  client.interceptors.request.use(requestInterceptor);
  client.interceptors.response.use(successResponseInterceptor, errorResponseInterceptor);
  return client;
}

// === API client ===
export default createClient({
  baseURL: ApiEndpoint,
});
