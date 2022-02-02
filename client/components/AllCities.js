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
        {this.props.cities.map((city) => {
          return (
            <div>
              <Link to={`/cities/${city.id}`}>
                {city.name}, {city.state}
              </Link>
            </div>
          );
        })}
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
