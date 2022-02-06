import React from "react";
import { fetchCities } from "../store/cities";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class CitySelect extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: "",
    };
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.getCities();
  }

  handleChange(e) {
    this.setState({
      filter: e.target.value,
    });
  }

  render() {
    const { filter } = this.state;
    const cities = this.props.cities;
    console.log(this.props);
    return (
        <div>
          <label htmlFor="filter">City:</label>
          <select name="filter" value={filter} onChange={this.handleChange}>
            {cities.map((city, index) => (
              <option key={index}>{city.name}</option>
            ))}
          </select>
        </div>
    );
  }
}

const mapState = (state) => {
  return {
    cities: state.cities,
  };
};

const mapDispatch = (dispatch) => ({
  getCities: () => dispatch(fetchCities()),
});

export default connect(mapState, mapDispatch)(CitySelect);
