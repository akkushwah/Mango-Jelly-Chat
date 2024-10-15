import { combineReducers } from 'redux';
import chatReducer from '../features/chat/chatSlice';

const rootReducer = combineReducers({
  chat: chatReducer,
});

export default rootReducer;
