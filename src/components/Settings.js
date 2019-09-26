import React from 'react';
import styled from 'styled-components';

export default ({ lightTheme, setLightTheme }) => (
  <Container>
    Settings!
    <span onClick={() => setLightTheme(!lightTheme)}>Theme</span>
  </Container>
);

const Container = styled.div`
  padding: 10px 5px;
`;
