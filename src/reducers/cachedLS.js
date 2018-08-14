// Login
export const SESSION_SUCCESS = 'SESSION_SUCCESS';

// Session expired
export const SESSION_EXPIRED = 'SESSION_EXPIRED';

export const initialState = {
  session: false
};

const cachedLS = (state = initialState, action) => {
  switch (action.type) {
    case SESSION_SUCCESS:
      return Object.assign({}, state, {
        session: true
      });

    case SESSION_EXPIRED:
      return Object.assign({}, state, {
        session: false
      });

    default:
      return state;
  }
};

export default cachedLS;