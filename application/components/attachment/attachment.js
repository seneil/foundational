import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Attachment extends Component {
  render() {
    const {
      url, title, description, image, datetime,
    } = this.props;

    return (
      <div>
        <p>{title}</p>
        <p>{url}</p>
        <p>{description}</p>
        <img src={image} alt={title}/>
        <p>{datetime}</p>
      </div>
    );
  }
}

Attachment.defaultProps = {
  url: '',
  title: '',
  description: '',
  image: '',
  datetime: '',
};

Attachment.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  datetime: PropTypes.string,
};
