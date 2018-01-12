import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import applicationReducer from './reducers';

/* eslint-disable no-underscore-dangle */
const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__
  ? compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
  : applyMiddleware(thunk);
/* eslint-enable no-underscore-dangle */

const store = createStore(combineReducers({
  application: applicationReducer,
}), {}, enhancers);

export default store;
