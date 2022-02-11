import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPublicUser } from "../store/user";

/**
 * COMPONENT
 */
class UserProfilePublic extends Component {
  // constructor() {
  //     super();
  //     this.state = {
  //       user: 0
  //     };
  //   }
  componentDidMount() {
    this.props.getPublicUser(this.props.selectedUser);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedUser !== this.props.selectedUser) {
      this.props.getPublicUser(this.props.selectedUser);
    }
  }

  render() {

    return (
      <div className="container">
        <div className="row public-profile mt-4">
          <div className="col">
            <p>Username: {this.props.user.username}</p>
            <p>Current City: {this.props.user.currentCity}</p>
            <p>Interests: {this.props.user.interests}</p>
            <button
              className="btn btn-secondary btn-sm"
              style={{ width: "150px" }}
            >
              Message me!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getPublicUser: (userId) => dispatch(fetchPublicUser(userId)),
  };
};

export default connect(mapState, mapDispatch)(UserProfilePublic);
