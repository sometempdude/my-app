import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducers imports
import reducers from '../reducers';

const createLocalStore = compose(
  persistState(['cachedLS'], {
    key: 'test-cached-store'
  })
)(createStore);


let store = createLocalStore(
  combineReducers(reducers),
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
