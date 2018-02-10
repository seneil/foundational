import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Note from 'application/components/note';

export default class Notes extends Component {
  componentDidMount() {
    this.props.fetchPublicNotes();
  }

  render() {
    const { notes } = this.props;

    return (
      <ul>
        {
          notes.map(note => <Note key={note.name} {...note}/>)
        }
      </ul>
    );
  }
}

Notes.propTypes = {
  fetchPublicNotes: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
