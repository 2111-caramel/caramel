import React from "react";
import { connect } from "react-redux";
import AllCities from "./AllCities";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
export const Home = (props) => {
  return (
    <div className="container-fluid homepage" align="center">
      <div style={{ marginBottom: "200px" }}>
        <div className="row justify-content-start mb-5">
          <h1>
            <b>Dreaming of your next move?</b>
          </h1>
        </div>

        <div className="row">
          <div className="col-6">
            <h5>I know where I'm going.</h5>
            <br />
            <AllCities />
          </div>
          <div className="col-6">
            <h5>I'm not sure where to go.</h5>
            <br />

            <Link role="button" aria-current="page" to="/preferences">
              <button className="nav-link-active btn btn-primary btn-sm survey">
                Take A Survey
              </button>
            </Link>
          </div>
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
