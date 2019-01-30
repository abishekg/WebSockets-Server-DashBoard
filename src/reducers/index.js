import { combineReducers } from 'redux';
import sendFileReducer from './sendFileReducer';
import receiveFileReducer from './receiveFileReducer';
import fetchFileReducer from './fetchFileReducer';

export default combineReducers({
  sendFiles: sendFileReducer,
  receiveFiles: receiveFileReducer,
  allFiles: fetchFileReducer,
})