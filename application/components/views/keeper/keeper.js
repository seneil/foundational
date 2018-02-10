import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default class Keeper extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Keeper</Title>
        {this.props.children}
      </Wrapper>
    );
  }
}

Keeper.defaultProps = {
  children: null,
};

Keeper.propTypes = {
  children: PropTypes.node,
};
