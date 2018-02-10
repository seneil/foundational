import { combineReducers } from 'redux';

import auth from './auth';
import storage from './storage';

export default combineReducers({
  auth,
  storage: combineReducers(storage),
});
