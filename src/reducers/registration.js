export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const REGISTRATION_GOT = 'REGISTRATION_GOT';
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';

export const initialState = {
  status: 'none',
  data: {},
  error: {}
};

const registration = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return Object.assign({}, state, {
        status: 'request'
      });
    case REGISTRATION_GOT:
      return Object.assign({}, state, {
        status: 'got',
        data: action.data
      });
    case REGISTRATION_ERROR:
      return Object.assign({}, state, {
        status: 'error',
        error: action.error
      });

    default:
      return state;
  }
};

export default registration;