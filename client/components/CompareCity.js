import React, { Component } from "react";
import { connect } from "react-redux";
import { getCityByName } from "../store/singleCity";
import Transportation_Chart from "./Charts/Transportation_Chart";

/**
 * COMPONENT
 */
class CompareCity extends Component {
  render() {
    console.log(this.props);
    const city = this.props.city || {};
    const transportation = city.transportation || {};

    return (
      <div className="container">
        <div className="row compare-city-name mb-2">
          <h3>{city.name}</h3>
        </div>

        <div className="row mb-2">
          <img className="city-image" src={city.imageUrlMobile}></img>
        </div>

        <div className="row compare-city-content mb-2">
          <h3>The Essentials</h3>
          <p>1-BR apartment: ${city.primaryStat.rent1br}/month</p>
          <p>3-BR apartment: ${city.primaryStat.rent3br}/month</p>
          <p>Salary: ${city.primaryStat.salary}/month</p>
          <p>Preschool: ${city.livingCost.daycare}/month</p>
        </div>

        <div className="row compare-city-content mb-2">
          <h3>Healthcare</h3>
          <p>Cost {city.healthcare.cost}</p>
          <p>Skill {city.healthcare.skill}</p>
          <p>Index {city.healthcare.index}</p>
        </div>  

        <div className="row compare-city-content mb-2">
          <h3>Environment</h3>
          <p>Overall Pollution Score: </p>
          <p>Cleanliness: </p>
          <p>Green Spaces: </p>
          <p>Air Quality: </p>
        </div>      

        <div className="row compare-city-content mb-2">
          <h3>Transportation</h3>
          <Transportation_Chart transportation={transportation} />
        </div>
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    singleCity: state.singleCity,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadCity: (cityId) => dispatch(getCityByName(cityId)),
  };
};

export default connect(mapState, mapDispatch)(CompareCity);
