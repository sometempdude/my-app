import { LOGIN_REQUEST, LOGIN_GOT, LOGIN_ERROR } from '../reducers/login';
import Api from '../core/Api';
import { setSession } from './cachedLS';

const req = () => ({ type: LOGIN_REQUEST });
const got = (data) => ({
  type: LOGIN_GOT,
  data: data
});
const err = (error) => ({
  type: LOGIN_ERROR,
  error: error
});

export const login = (data) => (dispatch) => Promise.resolve()
    .then(() => dispatch(req()))
    .then(() => Api.login(data.login, data.password))
    .then(data => {
      dispatch(setSession());
      return data;
    })
    .then(data => dispatch(got(data)))
    .catch(error => dispatch(err(error)));