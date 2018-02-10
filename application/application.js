import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import routes from 'application/routes';
import store from 'application/store';

const Application = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
);

export default Application;
