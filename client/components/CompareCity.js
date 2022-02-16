import React, { Component } from "react";
import { connect } from "react-redux";
import { getCityByName } from "../store/singleCity";
import Transportation_Chart from "./Charts/Transportation_Chart";
import GaugeChart from "react-gauge-chart";
import "chart.js/auto";
import Healthcare_Chart from "./Charts/Healthcare_Chart";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
class CompareCity extends Component {
  render() {
    const city = this.props.city || {};
    const transportation = city.transportation || {};
    return (
      <div className="container text-center">
        <div className="row justify-content-center compare-city-name mb-2">
          <Link className="link" aria-current="page" to={`/cities/${city.id}`}>
            <h3>{city.name}</h3>
          </Link>
        </div>

        <div className="row justify-content-center mb-2">
          <img className="city-image" src={city.imageUrlMobile}></img>
        </div>

        <div className="row justify-content-center compare-city-content mb-2">
          <h5>The Essentials</h5>
          <p>
            <b>1-BR apartment:</b> ${city.primaryStat.rent1br}/month
          </p>
          <p>
            <b>3-BR apartment:</b> ${city.primaryStat.rent3br}/month
          </p>
          <p>
            <b>Salary:</b> ${city.primaryStat.salary}/month
          </p>
          <p>
            <b>Preschool:</b> ${city.livingCost.daycare}/month
          </p>
        </div>

        <div className="row justify-content-center compare-city-content mb-2">
          <center>
            <h5>Healthcare</h5>          
            <GaugeChart
              id="healthIndex"
              nrOfLevels={30} 
              arcWidth = {0.3}
              colors={["red", "yellow", "green"]}
              animDelay={500}
              animateDuration={5000}
              percent={city.healthcare.index / 100}
              arcPadding={0.02}
              textColor="#000000"
              needleColor={"#BFB0BF"}
              needleBaseColor={"#BFB0BF"}
              style={{ width: "200px" }}
            />
            <a
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="About Overall Pollution Level: This figure is an estimation of the overall pollution in the city, based on surveys from visitors to the website Numbeo.com, 
              a cost of living database. The biggest weight is given to air pollution, then to water pollution/accessibility, two main pollution factors."
            >
              <sup>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: "inline" }}
                  width="12"
                  height="12"
                  fill="currentColor"
                  className="bi bi-info-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </sup>
              </a>
            <h6>Overall Healthcare Rating</h6>
          </center>
        </div>

        <div className="row justify-content-center compare-city-content mb-2">
          <center>
            <h5>Environment</h5>

            <GaugeChart
              id="pollutionIndex"
              nrOfLevels={30} 
              colors={["green", "yellow", "red"]}
              arcWidth = {0.3}
              percent={city.pollution.indexPollution / 100}
              arcPadding={0.02}
              animDelay={500}
              animateDuration={5000}
              textColor="#000000"
              needleColor={"#BFB0BF"}
              needleBaseColor={"#BFB0BF"}
              style={{ width: "200px" }}
            />
          <a
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="About Overall Pollution Rating: This figure is an estimation of the overall quality of the city's pollution, based on surveys from visitors to the website Numbeo.com, a cost of living database."
            >
              <sup>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: "inline" }}
                  width="12"
                  height="12"
                  fill="currentColor"
                  className="bi bi-info-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </sup>
              </a>
            <h6>Overall Pollution Level</h6>
          </center>
        </div>

        <div className="row justify-content-center compare-city-content mb-2">
          <h5>Transportation</h5>
          <Transportation_Chart transportation={transportation} />
        </div>
      </div>
    );
  }
}

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
