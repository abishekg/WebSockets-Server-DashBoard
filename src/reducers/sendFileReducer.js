import { FETCH_SENDFILES } from "./../actions/config";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_SENDFILES: {
      console.log(action.payload);
      return action.payload || "";
    }
    default:
      return state
  }
}