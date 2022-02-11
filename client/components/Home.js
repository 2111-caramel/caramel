import React from "react";
import { connect } from "react-redux";
import AllCities from "./AllCities";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username } = props;

  return (
    <div className="container homepage" align="center">
      <div className="row mb-5"></div>
      <div className="row mb-5"></div>
      <div className="row mb-5"></div>
      <div className="row mb-5"></div>
      <div className="row mb-5"></div>
      <div className="row">
        <div className="col-6">
          <h4>I know where I'm going.</h4>
          <br />
          <AllCities />
        </div>
        <div className="col-6">
          <h4>I'm not sure where to go.</h4>
          <br />
          <Link role="button" aria-current="page" to="/preferences">
            <button className="nav-link-active btn btn-primary">
              Take A Survey
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
