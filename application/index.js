import React from 'react';
import ReactDOM from 'react-dom';

import Application from './application';

const render = Body => {
  ReactDOM.render(
    <Body/>,
    window.document.getElementById('root'),
  );
};

render(Application);
