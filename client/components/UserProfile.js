import React, {Component} from "react";
import { connect } from "react-redux";
import AllCities from "./AllCities";
import { Link } from "react-router-dom";
import { fetchSingleUser } from "../store/user";

/**
 * COMPONENT
 */
class UserProfile extends Component {
  componentDidMount() {
    this.props.loadUser(this.props.id);
  }
  render() {
    return (
      <div className="user">
        <p>User Profile Page</p>
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
    id: state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadUser: (userId) => dispatch(fetchSingleUser(userId))
    };
};

export default connect(mapState, mapDispatch)(UserProfile);
