import React, { useState } from 'react';
//import io from 'socket.io-client';
import Menu from 'components/Menu';
import ChatMessages from 'components/ChatMessages';
import Settings from 'components/Settings';
import theme, { darkTheme, atLeastTabletSize } from './theme';
import styled, { ThemeProvider } from 'styled-components';
function App() {
  // const socket = io('http://localhost:8000');
  // socket.on('CHAT_MSG', function(data) {
  //   console.log('CHAT_MSG', data);
  // });
  // socket.on('connect', function() {
  //   console.log('connect');
  // });
  // const doSomething = () => {
  //   console.log('sending...');

  //   socket.emit('CHAT_MSG', {
  //     username: 'John',
  //     time: new Date().getTime(),
  //     message: 'Hello world',
  //   });
  // };

  // doSomething()
  const [activePage, setActivePage] = useState('CHAT');
  const [lightTheme, setLightTheme] = useState(true);
  return (
    <ThemeProvider theme={lightTheme ? theme : darkTheme}>
      <Container>
        <Menu setActivePage={setActivePage} activePage={activePage} />
        {activePage === 'CHAT' ? (
          <ChatMessages />
        ) : (
          <Settings lightTheme={lightTheme} setLightTheme={setLightTheme} />
        )}
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  color: ${props => props.theme.fg};
  background-color: ${props => props.theme.bg};
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  ${atLeastTabletSize} {
    flex-direction: row;
  }
`;

export default App;
