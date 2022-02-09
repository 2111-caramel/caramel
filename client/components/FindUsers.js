import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCities } from "../store/cities";
import { fetchUsersByCity } from "../store/users"

export class FindUsers extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }

  componentDidMount() {
    this.props.getCities();
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.fetchUsersByCity(evt.target.value)
    console.log("VALUE SENT TO THUNK:", evt.target.value)
  }

  render() {
      console.log("THIS.PROPS.USERSBYCITY", this.props.usersByCity)
    return (
      <div>
        <select className="form-select" onClick={(value) => this.handleSubmit(value)} aria-label="Default select example">
          {/* <option selected>Select City</option> */}
          {this.props.cities.map((city) => {
              return (
                <option key={city.id} value={city.name}>{city.name}</option>
              );
            })}
        </select>
        {/* {this.props.usersByCity ? (this.props.usersByCity.map(user => user.username)) : ("")} */}
        {this.props.usersByCity}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    cities: state.cities,
    usersByCity: state.users
  };
};

const mapDispatch = (dispatch) => ({
  getCities: () => dispatch(fetchCities()),
  fetchUsersByCity: (city) => dispatch(fetchUsersByCity(city)),
});

export default connect(mapState, mapDispatch)(FindUsers);
