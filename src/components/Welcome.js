import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Welcome extends React.Component {
  render() {
    const isLoggedin = this.props.auth.isLoggedin;
    return (
      <div className="welcome">
        <h1>Hey! Welcome :)</h1>
        {isLoggedin ? (
          <div className="login-signup">You are Logged In !!</div>
        ) : (
          <div className="login-signup">
            <Link to="/login">Login</Link> / <Link to="/signup">Signup</Link>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(Welcome);
