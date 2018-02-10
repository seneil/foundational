import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { offline } from '@redux-offline/redux-offline';
import thunk from 'redux-thunk';

import offlineConfig from 'application/common/services/offline-config';
import applicationReducer from './reducers';

const enhancers = [
  applyMiddleware(thunk),
  offline(offlineConfig),
];

/* eslint-disable no-underscore-dangle */
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}
/* eslint-enable no-underscore-dangle */

const store = createStore(combineReducers({
  application: applicationReducer,
}), {}, compose(...enhancers));

export default store;
