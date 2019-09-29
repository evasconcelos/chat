import React from 'react';
import Container from 'components/Container';
import { Provider } from 'react-redux';
import store from './redux/configureStore';

export default () => (
  <Provider store={store}>
    <Container />
  </Provider>
);
