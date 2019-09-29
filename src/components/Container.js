import React, { Component } from 'react';
import { socketConnect } from 'redux/messagesSlice';
import { connect } from 'react-redux';
import ChatMessages from 'components/ChatMessages';
import styled, { ThemeProvider } from 'styled-components';
import theme, { darkTheme, atLeastTabletSize } from 'theme';
import Settings from 'components/Settings';
import Menu from 'components/Menu';

class ContainerComponent extends Component {
  state = {
    activePage: 'CHAT',
    lightTheme: true,
  };
  constructor(props) {
    super(props);
    this.messagesConn = socketConnect(this.props.dispatch);
  }
  componentWillUnmount() {
    this.messagesConn.close();
  }
  setActivePage = val => {
    this.setState({ activePage: val });
  };
  setLightTheme = val => {
    this.setState({ lightTheme: val });
  };
  render() {
    const { activePage, lightTheme } = this.state;
    const { connected, error } = this.props;
    return !this.messagesConn ? (
      <ErrorMessage>Loading...</ErrorMessage>
    ) : !connected || error ? (
      <ErrorMessage>An error occured, trying to reconnect...</ErrorMessage>
    ) : (
      <ThemeProvider theme={lightTheme ? theme : darkTheme}>
        <Container>
          <Menu setActivePage={this.setActivePage} activePage={activePage} />
          {activePage === 'CHAT' ? (
            <ChatMessages sendMessage={this.messagesConn.send} />
          ) : (
            <Settings
              lightTheme={lightTheme}
              setLightTheme={this.setLightTheme}
            />
          )}
        </Container>
      </ThemeProvider>
    );
  }
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

const ErrorMessage = styled.div`
  padding: 20px;
  text-align: center;
  font-size: 20px;
`;

function mapStateToProps(state) {
  return { connected: state.messages.connected, error: state.messages.error };
}
export default connect(mapStateToProps)(ContainerComponent);
