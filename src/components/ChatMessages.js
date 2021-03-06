import React from 'react';
import styled from 'styled-components';
import SingleMessage from './SingleMessage';
import { atLeastTabletSize } from '../utils/theme';
import bgchat from 'assets/bgchat.png';
import SendMessage from 'components/SendMessage';
import { useSelector } from 'react-redux';

export default ({ sendMessage, settings }) => {
  let messageNumber = 0;
  return (
    <Container>
      <WhatsappBackground />
      <Messages id="big-messages-scroll">
        <MessagesInner>
          {useSelector(state =>
            state.messages.data
              .slice()
              .reverse()
              .map(msg => {
                messageNumber++;
                return (
                  <SingleMessage
                    key={messageNumber}
                    {...msg}
                    self={msg.uid === settings.uid}
                    clockDisplay12h={settings.clockDisplay12h}
                  >
                    {msg.message}
                  </SingleMessage>
                );
              })
          )}
        </MessagesInner>
      </Messages>
      <SendMessage sendMessage={sendMessage} settings={settings} />
    </Container>
  );
};

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 95%;
  position: relative;
  background-color: ${props => props.theme.bg2};
  ${atLeastTabletSize} {
    height: auto;
  }
`;

const Messages = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
  z-index: 2;
`;
const MessagesInner = styled.div`
  height: 100%;
  z-index: 3;
  display: flex;
  flex-direction: column-reverse;
`;
const WhatsappBackground = styled.div`
  background-image: url(${bgchat});
  background-repeat: repeat;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0.06;
  z-index: 1;
`;
