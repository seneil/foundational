import { createAction, handleActions } from 'redux-actions';

const fetchPublicNotesCommit = createAction('FETCH_PUBLIC_NOTES_COMMIT');

export const fetchPublicNotesAction = createAction(
  'FETCH_PUBLIC_NOTES',
  null,
  ({ limit }) => ({
    offline: {
      effect: {
        url: `/api/public?limit=${limit}`,
        method: 'GET',
      },
      commit: fetchPublicNotesCommit(),
    },
  }),
);

const defaultState = [];

export default handleActions({
  [fetchPublicNotesCommit]: (state, { payload }) => payload.result.notes,
}, defaultState);
