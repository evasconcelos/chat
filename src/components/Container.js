import React, { Component } from 'react';
import { socketConnect } from 'redux/messagesSlice';
import { connect } from 'react-redux';
import ChatMessages from 'components/ChatMessages';
import styled, { ThemeProvider } from 'styled-components';
import theme, { darkTheme, atLeastTabletSize } from 'utils/theme';
import Settings from 'components/Settings';
import Menu from 'components/Menu';
import setTitleBackFromNewMessages from 'utils/setTitleBackFromNewMessages';

const uid =
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);
const initialSettings = {
  lightTheme: true,
  clockDisplay12h: true,
  ctrlEnterSendMsg: true,
  uid,
  userName: 'Guest_' + uid.substring(0, 3),
  language: 'EN',
};

class ContainerComponent extends Component {
  state = {
    activePage: 'CHAT',
    settings:
      JSON.parse(localStorage.getItem('chatSettings')) || initialSettings,
  };
  constructor(props) {
    super(props);
    this.messagesConn = socketConnect(this.props.dispatch);
    setTitleBackFromNewMessages();
  }
  componentDidMount() {
    if (!JSON.parse(localStorage.getItem('chatSettings'))) {
      localStorage.setItem('chatSettings', JSON.stringify(this.state.settings));
    }
  }
  componentWillUnmount() {
    this.messagesConn.close();
  }
  setActivePage = val => {
    this.setState({ activePage: val });
  };
  setSettingsItem = (item, val) => {
    this.setState(state => {
      const settings = { ...state.settings, [item]: val };
      localStorage.setItem('chatSettings', JSON.stringify(settings));
      return { settings };
    });
  };
  resetSettings = () => {
    this.setState({ settings: initialSettings });
    localStorage.setItem('chatSettings', JSON.stringify(initialSettings));
  };
  render() {
    const { activePage, settings } = this.state;
    const { connected, error } = this.props;
    return !this.messagesConn ? (
      <ErrorMessage>Loading...</ErrorMessage>
    ) : !connected || error ? (
      <ErrorMessage>An error occured, trying to reconnect...</ErrorMessage>
    ) : (
      <ThemeProvider theme={settings.lightTheme ? theme : darkTheme}>
        <Container>
          <Menu setActivePage={this.setActivePage} activePage={activePage} />
          {activePage === 'CHAT' ? (
            <ChatMessages
              sendMessage={this.messagesConn.send}
              settings={settings}
            />
          ) : (
            <Settings
              settings={settings}
              setSettingsItem={this.setSettingsItem}
              resetSettings={this.resetSettings}
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
