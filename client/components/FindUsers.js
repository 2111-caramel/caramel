import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCities } from "../store/cities";
import { fetchUsersByCity } from "../store/users";
import UserProfilePublic from "./UserProfilePublic"

export class FindUsers extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "",
      userId: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clickUsername = this.clickUsername.bind(this);
  }

  componentDidMount() {
    this.props.getCities();
  }

  handleChange(evt) {
    this.setState({
      city: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.fetchUsersByCity(this.state.city);
  }

  clickUsername(evt) {
    evt.preventDefault();
    this.setState({
      userId: evt.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-2">
          <div className="col-4">
            <form onSubmit={this.handleSubmit}>
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
                      {city.name}
                    </option>
                  );
                })}
              </select>
              <button type="submit" className="btn btn-primary btn-sm" style={{margin: "10px"}}>
                Find Users
              </button>
            </form>
            {/* {this.props.usersByCity.length > 0 ? (this.props.usersByCity.map(user => user.username)) : (<h6>No users living here yet :(</h6>)} */}
            <ul className="list-group">
              {this.props.usersByCity.map((user) => {
                return (
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={this.clickUsername}
                    style={{ width: "150px", margin: "10px" }}
                    value={user.id}
                  >
                    {user.username}
                  </button>
                );
              })}
            </ul>
          </div>
          <div className="col-8">
          {this.state.userId !== 0 ? <UserProfilePublic selectedUser={this.state.userId} /> : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    cities: state.cities,
    usersByCity: state.users,
  };
};

const mapDispatch = (dispatch) => ({
  getCities: () => dispatch(fetchCities()),
  fetchUsersByCity: (city) => dispatch(fetchUsersByCity(city)),
});

export default connect(mapState, mapDispatch)(FindUsers);
