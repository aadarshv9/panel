import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PropTypes from "prop-types";

import { Home, Navbar, Page404, Login, Signup, Welcome, Tasks, User } from "./";
import { fetchTasks } from "../actions/tasks";

const PrivateRoute = (privateRouteProps) => {
  const { isLoggedin, path, component: Component } = privateRouteProps;

  return (
    <Route
      path={path}
      render={(props) => {
        return isLoggedin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchTasks());
  }
  render() {
    const { auth } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute
              path="/home"
              component={Home}
              isLoggedin={auth.isLoggedin}
            />
            <PrivateRoute
              path="/tasks"
              component={Tasks}
              isLoggedin={auth.isLoggedin}
            />
            <PrivateRoute
              path="/user"
              component={User}
              isLoggedin={auth.isLoggedin}
            />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

App.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(App);
