import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  AUTHENTICATE_USER,
  LOG_OUT,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  CLEAR_AUTH_STATE,
  EDIT_PASSWORD_SUCCESSFUL,
  EDIT_PASSWORD_FAILED,
} from "../actions/actionTypes";

const initialAuthState = {
  // {uid: "g@gmail.com", displayName: "g", photoURL: null, email: "g@gmail.com", phoneNumber: null} --> getting user from firebase authentication
  user: {},
  error: null,
  isLoggedin: false,
  inProgress: false,
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case CLEAR_AUTH_STATE:
      return {
        ...state,
        error: null,
      };
    case LOGIN_START:
    case SIGNUP_START:
      return {
        ...state,
        inProgress: true,
      };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        inProgress: false,
        error: false,
      };
    case LOGIN_FAILED:
    case SIGNUP_FAILED:
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    case AUTHENTICATE_USER:
      return {
        ...state,
        user: action.user,
        isLoggedin: true,
      };
    case LOG_OUT:
      return {
        ...state,
        user: {},
        isLoggedin: false,
      };
    case EDIT_PASSWORD_SUCCESSFUL:
      return {
        ...state,
        error: false,
      };
    case EDIT_PASSWORD_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
