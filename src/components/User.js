import React from "react";
import { connect } from "react-redux";
import * as firebase from "firebase";
import {
  logoutUser,
  clearAuthState,
  editPasswordSuccessful,
  editPasswordFailed,
} from "../actions/auth";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      isChangePassword: false,
      newPassword: "",
    };
  }

  componentDidMount() {
    const fetchUserInfo = async () => {
      try {
        var user = await firebase.auth().currentUser;
        this.setState({
          Username: user.displayName,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserInfo();
  }

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  handleInputPasswordChange = (e) => {
    this.setState({
      newPassword: e.target.value,
    });
  };

  handleChangePassword = (e) => {
    this.setState({
      isChangePassword: true,
    });
  };

  handleLogout = (e) => {
    this.props.dispatch(logoutUser());
  };

  handleSaveChangedPassword = async (e) => {
    const newPassword = this.state.newPassword;
    var user = await firebase.auth().currentUser;

    user
      .updatePassword(newPassword)
      .then(() => {
        // Update successful.
        this.props.dispatch(editPasswordSuccessful());
        setTimeout(() => this.props.dispatch(clearAuthState()), 3000);
      })
      .catch((error) => {
        // An error happened.
        this.props.dispatch(editPasswordFailed(error.message));
      });
  };

  render() {
    const { error } = this.props.auth;
    return (
      <div id="user">
        <div className="user-info">
          {error && <div className="alert error-dailog">{error}</div>}
          {error === false && (
            <div className="alert success-dailog">
              Password changed successfully!
            </div>
          )}
          <span>Username: {this.state.Username}</span>
          {this.state.isChangePassword ? (
            <span>
              New Password: &nbsp;
              <input
                type="password"
                onChange={this.handleInputPasswordChange}
              ></input>
            </span>
          ) : (
            <span>Password: **********</span>
          )}
        </div>
        <div className="control-button">
          {this.state.isChangePassword ? (
            <button onClick={this.handleSaveChangedPassword}>
              Save Password
            </button>
          ) : (
            <button onClick={this.handleChangePassword}>Change Password</button>
          )}
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(User);
