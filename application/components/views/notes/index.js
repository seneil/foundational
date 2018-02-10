import { connect } from 'react-redux';
import fetchPublicNotes from 'application/action-creators/fetch-public-notes';

import Notes from './notes';

Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = state => ({
  notes: state.application.storage.publicNotes,
});

const mapDispatchToProps = () => ({ fetchPublicNotes });

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
