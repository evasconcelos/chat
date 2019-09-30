import React from 'react';
import styled from 'styled-components';

export default ({ children, self, fromNickname, time, clockDisplay12h }) => {
  const date = new Date(time),
    hours = clockDisplay12h ? date.getHours() % 12 || 12 : date.getHours(),
    ampm = date.getHours() < 12 || date.getHours() === 24 ? 'AM' : 'PM',
    timeStr = `${hours}:${date.getMinutes()} ${clockDisplay12h ? ampm : ''}`;
  return (
    <Container self={self}>
      <Bubble self={self}>
        <Nickname self={self} data-js-nickname>{fromNickname}</Nickname>
        <Text self={self} data-js-message>{children}</Text>
        <Timestamp data-js-timestamp>{timeStr}</Timestamp>
      </Bubble>
    </Container>
  );
};
const Container = styled.div`
  margin-top: 10px;
  text-align: ${props => (props.self ? 'right' : 'left')};
`;
const Bubble = styled.div`
  position: relative;
  display: inline-block;
  background: ${props => (props.self ? '#dcf8c6' : props.theme.bg)};
  border-radius: 0.4em;
  margin: 5px 15px;
  padding: 5px 10px;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom-color: ${props => (props.self ? '#dcf8c6' : props.theme.bg)};
    border-top: 0;

    margin-left: -5px;
    margin-top: -10px;
    ${props =>
      props.self
        ? `right: 15px;border-right: 0;`
        : `left: 15px;border-left: 0;`}
  }
`;

const Nickname = styled.span`
  color: blue;
  font-size: 11px;
  display: ${props => (props.self ? 'none' : 'block')};
`;

const Text = styled.p`
  margin: 5px 0;
  padding-right: ${props => (props.self ? '3em' : '10em')};
`;
const Timestamp = styled.span`
  color: #ccc;
  font-size: 11px;

  position: absolute;
  bottom: 5px;
  right: 5px;
`;
