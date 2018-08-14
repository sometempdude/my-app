import reqwest from 'reqwest';
import formatUrl from './FormatUrl.js';
import store from '../store/store';
import { ERR_API_REQUEST_COMMON } from '../constants/ErrorConstants.js';
import { SESSION_EXPIRED } from '../reducers/cachedLS';

/**
 * Base XMLHTTPRequest service
 * @return {Promise}
 */
export default (
  url,
  method,
  data
) => {
  const request = formatUrl(url, data);
  return new Promise((resolve, reject) => {
    reqwest({
      url: request.url,
      method: method,
      data: request.data
        ? method !== 'get' ? JSON.stringify(request.data) : request.data
        : null,
      type: 'json',
      withCredentials: true,
      contentType: 'application/json',
      crossOrigin: true,
      success: res => resolve(res),

      error: ({ status, response, responseText }) => {
        reject({
          code: typeof status !== 'undefined' ? status : 500,
          message: response || responseText || ERR_API_REQUEST_COMMON
        });
      }
    });
  }).catch(error => {
    if (error.code === 1000) {
      window.sessionStorage.clear();
      store.dispatch({ type: SESSION_EXPIRED });
    }

    return Promise.reject(error);
  });
};