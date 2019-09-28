import React from 'react';
import styled from 'styled-components';
import SingleMessage from './SingleMessage';
import { atLeastTabletSize } from '../theme';
import bgchat from '../assets/bgchat.png';

const scrollToBottom = () => {
  const el = document.getElementById('big-messages-scroll');
  el.scrollTop = el.scrollHeight;
};
export default () => (
  <Container>
    <Messages id="big-messages-scroll" onClick={() => scrollToBottom()}>
      <WhatsappBackground />
      <SingleMessage
        self={false}
        fromNickname="nickname"
        time={new Date().getTime()}
      >
        Hello World
      </SingleMessage>
      <SingleMessage
        self={true}
        fromNickname="nickname"
        time={new Date().getTime()}
      >
        Hello 123
      </SingleMessage>
      <SingleMessage
        self={false}
        fromNickname="asdfg"
        time={new Date().getTime()}
      >
        Hello
      </SingleMessage>
    </Messages>
    <Send>
      <Field type="text" />
    </Send>
  </Container>
);

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 95%;
  ${atLeastTabletSize} {
    height: auto;
  }
`;

const Messages = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
  position: relative;
  background-color: ${props => props.theme.bg2};
`;
const WhatsappBackground = styled.div`
  background-image: url(${bgchat});
  background-repeat: repeat;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0.06;
`;

const Send = styled.div`
  position: relative;
  background-color: ${props => props.theme.bg2};
  padding: 10px 0 5px;
`;
const Field = styled.input`
  width: 100%;
  height: 30px;
  padding-left: 10px;
  border: 2px solid ${props => props.theme.bg2};
  border-radius: 10px;
  outline-width: 0;
`;
