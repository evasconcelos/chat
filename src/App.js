import React from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';

function App() {
  const socket = io('http://localhost:8000');
  socket.on('CHAT_MSG', function(data) {
    console.log('CHAT_MSG', data);
  });
  socket.on('connect', function() {
    console.log('connect');
  });
  const doSomething = () => {
    console.log('sending...');

    socket.emit('CHAT_MSG', {
      username: 'John',
      time: new Date().getTime(),
      message: 'Hello world',
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          onClick={() => doSomething()}
        />
      </header>
    </div>
  );
}

export default App;
