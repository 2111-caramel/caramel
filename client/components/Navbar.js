import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store";
import AllCities from "./AllCities";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <h1>Urban Analysis</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link-active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link-active"
                      aria-current="page"
                      to="/preferences"
                    >
                      Take Survey
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link-active"
                      aria-current="page"
                      to="/myInfo"
                    >
                      Compare Cities
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link-active"
                      aria-current="page"
                      to="/"
                      onClick={handleClick}
                    >
                      Logout
                    </Link>
                    {/* <a
                      className="nav-link-active"
                      aria-current="page"
                      href="#"
                      onClick={handleClick}
                    >
                      Logout
                    </a> */}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link-active"
                      aria-current="page"
                      to="/myInfo"
                    >
                      My Info
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      ) : (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link-active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link-active"
                      aria-current="page"
                      to="/preferences"
                    >
                      Take Survey
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link-active"
                      aria-current="page"
                      to="/compare"
                    >
                      Compare Cities
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link-active"
                      aria-current="page"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link-active"
                      aria-current="page"
                      to="/signup"
                    >
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <AllCities />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* The navbar will show these links before you log in */}
        </div>
      )}
    </nav>
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
