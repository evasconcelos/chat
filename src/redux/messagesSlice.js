import { createSlice } from 'redux-starter-kit';
import io from 'socket.io-client';
import l from 'utils/localization';

const messagesSlice = createSlice({
  slice: 'messages',
  initialState: { data: [], connected: false, error: false },
  reducers: {
    addMessage(state, action) {
      state.data.push(action.payload);
    },
    getMessagesConnect(state) {
      state.connected = false;
      state.error = false;
    },
    connected(state) {
      state.connected = true;
      state.error = false;
    },
    disconnected(state) {
      state.connected = false;
      state.error = true;
    },
  },
});

export const {
  addMessage,
  getMessagesConnect,
  connected,
  disconnected,
} = messagesSlice.actions;

export default messagesSlice.reducer;

export const socketConnect = dispatch => {
  dispatch(getMessagesConnect());
  const socket = io('http://localhost:8000');
  socket.on('CHAT_MSG', function(data) {
    dispatch(addMessage(data));
    const el = document.getElementById('big-messages-scroll');
    el.scrollTop = el.scrollHeight;
    if (document.hidden) {
      document.title = l(`New Messages!`);
    }
  });
  socket.on('connect', function() {
    dispatch(connected());
  });
  socket.on('connect_error', function() {
    dispatch(disconnected());
  });
  socket.on('connect_timeout', function() {
    dispatch(disconnected());
  });
  socket.on('disconnect', function() {
    dispatch(disconnected());
  });

  return {
    send: msg => socket.emit('CHAT_MSG', msg),
    close: () => socket.close(),
  };
};
