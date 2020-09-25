import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers";

let store;

// creating a store for our application and applying middleware 'thunk' to handle async actions
export function configureStore() {
  store = createStore(reducer, applyMiddleware(thunk));

  return store;
}
