import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../store";

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;
  // displayName changes toggles login & logout
  return (
    <center>
    <div >
      <h4 >Login</h4>
      <form onSubmit={handleSubmit} name={name}>
        {console.log("INSIDE FORM-----", name)}

        <div className = "row" className ="col-xs-1 center-block" align="center">
          <label htmlFor="username" >
            <small>Username</small>
          </label>
          <input name="username" type="text" className="form-control"/>
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" className="form-control"/>
        </div>
        {name === "signup" ? (
          <div>
            <label>HELLO</label>
            <input name="test" type="text" />
          </div>
        ) : (
          ""
        )}
        <div>
          <button className="btn btn-primary btn-sm" type="submit" style={{background: "#b398bd", border: "none"}}>{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
    </center>
  );
};

const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login", //FOR SUBMIT BUTTON
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name; //going directly to the forms //name toggles login/out
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticate(username, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
