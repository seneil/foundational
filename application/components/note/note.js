import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Attachment from 'application/components/attachment';

export default class Note extends Component {
  render() {
    const { name, body, attachments } = this.props;

    return (
      <li key={name}>
        <div>
          {body}
        </div>
        <div>
          {
            attachments.map(attachment => <Attachment key={attachment._id} {...attachment}/>)
          }
        </div>
      </li>
    );
  }
}

Note.defaultProps = {
  name: '',
  body: '',
  attachments: [],
};

Note.propTypes = {
  name: PropTypes.string,
  body: PropTypes.string,
  attachments: PropTypes.arrayOf([
    PropTypes.object,
  ]),
};
