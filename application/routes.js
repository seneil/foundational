import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Keeper from 'application/components/views/keeper';
import Notes from 'application/components/views/notes';
import NoMatch from 'application/components/views/no-match';

const routes = (
  <Route path="/" component={Keeper}>
    <IndexRoute component={Notes}/>
    <Route path="*" component={NoMatch}/>
  </Route>
);

export default routes;
