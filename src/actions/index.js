import axios from "axios";
import { ROOT_URL, FETCH_SENDFILES, FETCH_RECEIVEFILES } from "./config";

export const fetchSendFiles = () => async dispatch => {
  const res = await axios.get(`${ROOT_URL}${FETCH_SENDFILES}`);
  console.log('res: ', res);
  dispatch({ type: FETCH_SENDFILES, payload: res.data });
}
export const fetchReceiveFiles = () => async dispatch => {
  const res = await axios.get(`${ROOT_URL}${FETCH_RECEIVEFILES}`);
  console.log('res: ', res);
  dispatch({ type: FETCH_RECEIVEFILES, payload: res.data });
}