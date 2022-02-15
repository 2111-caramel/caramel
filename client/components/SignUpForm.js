import React from "react";
import { connect } from "react-redux";
import { authenticateNewUser } from "../store";
import { fetchCities } from "../store/cities";


let currentCityValue = ""

export class SignUpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      currentCity: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    currentCityValue=evt.target.value
  }

  componentDidMount() {
    this.props.getCities();
  }

  render() {
    const { name, displayName, handleSubmit, error } = this.props;
    return (
      <div className="container">
        <form onSubmit={handleSubmit} name={name}>
          <div className="row mt-3" style={{ width: "200px" }}>
            <label htmlFor="username" className="form-label">
              <small>Username</small>
            </label>
            <input className="form-control" name="username" type="text" />
          </div>
          <div className="row" style={{ width: "200px" }}>
            <label htmlFor="password" className="form-label">
              <small>Password</small>
            </label>
            <input className="form-control" name="password" type="password" />
          </div>

          <div className="row" style={{ width: "200px" }}>
            <label htmlFor="currentCity" className="form-label">
              <small>Current City</small>
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              style={{ width: "200px", margin: "10px" }}
              onChange={this.handleChange}
            >
              <option selected>Select City</option>
              {this.props.cities.map((city) => {
                return (
                  <option key={city.id} value={city.name}>
                    {city.name}, {city.state}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="row" style={{ width: "500px" }}>
            <label htmlFor="interests" className="form-label">
              <small>Interests</small>
            </label>
            <input className="form-control" name="interests" type="text" />
          </div>
          <div>
            <button className="btn btn-primary btn-sm" type="submit" style={{background: "#617176", border: "none"}}>{displayName}</button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </div>
    );
  }
}

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.auth.error,
    cities: state.cities,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getCities: () => dispatch(fetchCities()),
    handleSubmit(evt) {
      console.log("***EVT.TARGET", evt.target)
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      const currentCity = currentCityValue
      const interests = evt.target.interests.value;
      dispatch(
        authenticateNewUser(username, password, currentCity, interests, formName)
      );
    },
  };
};

export default connect(mapSignup, mapDispatch)(SignUpForm);
