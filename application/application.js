import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

const Application = () => (
  <Provider store={store}>
    <div>
      <h1>Link Keeper</h1>
    </div>
  </Provider>
);

export default Application;
