export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_GOT = 'LOGIN_GOT';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const initialState = {
  status: 'none',
  data: {},
  error: {}
};

const login = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        status: 'request'
      });
    case LOGIN_GOT:
      return Object.assign({}, state, {
        status: 'got',
        data: action.data
      });
    case LOGIN_ERROR:
      return Object.assign({}, state, {
        status: 'error',
        error: action.error
      });

    default:
      return state;
  }
};

export default login;
