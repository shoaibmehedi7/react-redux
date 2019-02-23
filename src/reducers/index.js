import { combineReducers } from "redux";
import Counter from "./reducer_counter";
import UserData from './reducer_user_data'

const rootReducer = combineReducers({
  counter: Counter ,
  userData: UserData
});

export default rootReducer;
