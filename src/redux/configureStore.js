import { configureStore } from 'redux-starter-kit';
import reducer from './messagesSlice';

const store = configureStore({
  reducer: {
    messages: reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
