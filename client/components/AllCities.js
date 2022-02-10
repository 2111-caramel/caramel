import React from "react";
import { fetchCities } from "../store/cities";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class AllCities extends React.Component {
  componentDidMount() {
    this.props.getCities();
  }

  render() {
    return (
      <div>
        <div className="dropdown select-city-form">
          <a
            className="btn btn-primary btn-sm dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select City
          </a>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            {this.props.cities.map((city, index) => {
              return (
                <div key={index}>
                  <li>
                    <a className="dropdown-item" href={`cities/${city.id}`}>
                      {city.name}, {city.state}
                    </a>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
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

export default connect(mapState, mapDispatch)(AllCities);
