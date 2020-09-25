import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    const activeTab = this.props.location.pathname;
    return (
      <nav className="nav">
        <ul>
          <li className="logo">
            <Link to="/">LOGO</Link>
          </li>

          <li className={activeTab === "/home" ? "active-tab" : ""}>
            <Link to="/home">Home</Link>
          </li>

          <li className={activeTab === "/tasks" ? "active-tab" : ""}>
            <Link to="/tasks">Tasks</Link>
          </li>

          <li className={activeTab === "/user" ? "active-tab" : ""}>
            <Link to="/user">User</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect()(withRouter(Navbar));
