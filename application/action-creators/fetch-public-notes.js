import store from 'application/store';

import { fetchPublicNotesAction } from 'application/reducers/public-notes';

export default () => {
  store.dispatch(fetchPublicNotesAction({ limit: 50 }));
};
