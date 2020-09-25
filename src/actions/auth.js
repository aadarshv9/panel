import {
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOG_OUT,
  AUTHENTICATE_USER,
  SIGNUP_START,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
  CLEAR_AUTH_STATE,
  EDIT_PASSWORD_SUCCESSFUL,
  EDIT_PASSWORD_FAILED,
} from "./actionTypes";

import * as firebase from "firebase";

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}
export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAILED,
    error: errorMessage,
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function login(email, password) {
  return (dispatch) => {
    dispatch(startLogin());
    // authenticating using firbase authentication
    const promise = firebase.auth().signInWithEmailAndPassword(email, password);
    promise.then((user) => {
      dispatch(loginSuccess());
      dispatch(authenticateUser(user));
    });
    promise.catch((err) => dispatch(loginFailed(err.message)));
  };
}

export function logoutUser() {
  return {
    type: LOG_OUT,
  };
}

export function signup(email, password, confirmPassword, name) {
  return (dispatch) => {
    if (password !== confirmPassword) {
      dispatch(signupFailed("Password do not matched"));
      return;
    }
    // creating/signing-up user in firebase
    const promise = firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    promise.then(async () => {
      try {
        var user = await firebase.auth().currentUser;
        await user.updateProfile({
          displayName: name,
        });
        dispatch(signupSuccessful());
        setTimeout(() => dispatch(clearAuthState()), 3000);
      } catch (error) {
        dispatch(signupFailed(error));
      }
    });

    promise.catch((err) => dispatch(signupFailed(err.message)));
  };
}

export function startSingup() {
  return {
    type: SIGNUP_START,
  };
}

export function signupFailed(error) {
  return {
    type: SIGNUP_FAILED,
    error,
  };
}

export function signupSuccessful() {
  return {
    type: SIGNUP_SUCCESS,
  };
}

export function clearAuthState() {
  return {
    type: CLEAR_AUTH_STATE,
  };
}

export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}

export function editPasswordSuccessful() {
  return {
    type: EDIT_PASSWORD_SUCCESSFUL,
  };
}

export function editPasswordFailed(error) {
  return {
    type: EDIT_PASSWORD_FAILED,
    error,
  };
}
