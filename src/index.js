import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as firebase from "firebase";
import "firebase/firestore";
import { Provider } from "react-redux";
import { configureStore } from "./store";

const store = configureStore();
const dotenv = require("dotenv").config();

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "panel-3b240.firebaseapp.com",
  databaseURL: "https://panel-3b240.firebaseio.com",
  projectId: "panel-3b240",
  storageBucket: "panel-3b240.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
