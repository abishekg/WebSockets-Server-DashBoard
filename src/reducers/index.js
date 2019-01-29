import { combineReducers } from 'redux';
import sendFileReducer from './sendFileReducer';
import receiveFileReducer from './receiveFileReducer';

export default combineReducers({
  sendFiles: sendFileReducer,
  receiveFiles: receiveFileReducer,
})