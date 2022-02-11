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
    <div className="container homepage mt-3" align="center">
      <div className="row mb-5"></div>
      <div className="row mb-5"></div>
      <div className="row justify-content-center mb-5"><h4>Dreaming of your next move?</h4></div>
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
            <button className="nav-link-active btn btn-primary btn-sm">
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
