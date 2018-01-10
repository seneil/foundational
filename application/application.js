import React from 'react';
import { Provider } from 'react-redux';

import styled from 'styled-components';

import store from './store';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Application = () => (
  <Provider store={store}>
    <Wrapper>
      <Title>Link Keeper</Title>
    </Wrapper>
  </Provider>
);

export default Application;
