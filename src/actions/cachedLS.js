// @flow
import { SESSION_SUCCESS, SESSION_EXPIRED } from '../reducers/cachedLS';

export const setSession = () => ({ type: SESSION_SUCCESS });
export const clearSession = () => ({ type: SESSION_EXPIRED });