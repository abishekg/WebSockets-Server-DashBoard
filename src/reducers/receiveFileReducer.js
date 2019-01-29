import { FETCH_RECEIVEFILES } from "../actions/config";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_RECEIVEFILES: {
      console.log(action.payload);
      return action.payload || "";
    }
    default:
      return state
  }
}