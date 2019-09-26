import React from 'react';
import styled from 'styled-components';
import SingleMessage from './SingleMessage';
const scrollToBottom = () => {
  const el = document.getElementById('big-messages-scroll');
  el.scrollTop = el.scrollHeight;
};
export default () => (
  <Container>
    <Messages id="big-messages-scroll" onClick={() => scrollToBottom()}>
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
    </Messages>
    <Send>
      <Field type="text" />
      <Button>Send</Button>
    </Send>
  </Container>
);

const Container = styled.div`
  padding: 10px 5px;
  border: 5px dashed green;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 0;
`;

const Messages = styled.div`
  flex-grow: 1;
  border: 1px solid yellow;
  overflow-y: scroll;
`;
const Send = styled.div`
  display: flex;
  flex-direction: row;
`;
const Field = styled.input`
  flex-grow: 1;
`;
const Button = styled.button``;
