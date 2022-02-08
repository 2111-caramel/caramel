import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import AllCities from "./components/AllCities";
import SingleCity from "./components/SingleCity";
import UserPrefForm from "./components/UserPrefForm";
import { me } from "./store";
import CompareView from "./components/CompareView";
import UserProfile from "./components/UserProfile";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/compare" component={CompareView} />
            <Route exact path="/myInfo" component={UserProfile} />
            <Route exact path="/singleCity" component={SingleCity} />
            <Route path="/:cityId" component={SingleCity} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/preferences" component={UserPrefForm} />
            <Route path="/preferences/:model" component={UserPrefForm} />
            <Route path="/singleCity" component={SingleCity} />
            <Route exact path="/compare" component={CompareView} />
            <Route path="/:cityId" component={SingleCity} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
