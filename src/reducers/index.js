import { combineReducers } from "redux";
import auth from "./auth";
import tasks from "./tasks";

// combining all reducer into one
export default combineReducers({
  auth,
  tasks,
});
