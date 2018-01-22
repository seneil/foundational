import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './action-creators/offline-service';

import Application from './application';

const render = Body => {
  ReactDOM.render(
    <AppContainer>
      <Body/>
    </AppContainer>,
    window.document.getElementById('root'),
  );
};

render(Application);

if (module.hot) {
  module.hot.accept('./application', () => render(Application));
}
