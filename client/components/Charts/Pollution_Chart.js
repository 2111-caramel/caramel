import React from "react";
import GaugeChart from "react-gauge-chart";
import "chart.js/auto";

class Pollution_Chart extends React.Component {
  render() {
    const {
      indexPollution,
      drinkingWaterQuality,
      airQuality,
      cleanliness,
      greenParksQuality,
    } = this.props.pollution;

    return (
      <div key="gauge-chart" className="container-fluid text-center">
        <div className="row justify-content-center">
          <div className="col-5">
            <GaugeChart
              percent={indexPollution / 100}
              id="pollutionIdx"
              arcsLength={[0.33, 0.33, 0.33]}
              colors={["green", "yellow", "red"]}
              arcPadding={0.02}
              textColor="#000000"
              animate={true}
              animDelay={500}
              animateDuration={5000}
              needleColor={"#BFB0BF"}
              needleBaseColor={"#BFB0BF"}
            />
            <div>
              <h5 style={{ display: "inline" }}>Overall Pollution Level</h5>{" "}
              <a data-bs-toggle="tooltip" data-bs-placement="top" title="About Overall Pollution Level: This figure is an estimation of the overall pollution in the city, based on surveys from visitors to the website Numbeo.com, a cost of living database. The biggest weight is given to air pollution, then to water pollution/accessibility, two main pollution factors.">
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
            </div>
          </div>
        </div>

        <div className="row mt-3 align-items-center">
          <div className="col-2"></div>
          <div className="col-4">
            <p>
              <GaugeChart
                percent={drinkingWaterQuality / 100}
                id="pollutionWater"
                arcsLength={[0.33, 0.33, 0.33]}
                colors={["red", "yellow", "green"]}
                arcPadding={0.02}
                textColor="#000000"
                animate={true}
                animDelay={500}
                animateDuration={5000}
                needleColor={"#BFB0BF"}
                needleBaseColor={"#BFB0BF"}
              />
              <h6>Drinking Water Quality</h6>
            </p>
          </div>
          <div className="col-4">
            <p>
              <GaugeChart
                percent={airQuality / 100}
                id="pollutionAir"
                arcsLength={[0.33, 0.33, 0.33]}
                colors={["red", "yellow", "green"]}
                arcPadding={0.02}
                textColor="#000000"
                animate={true}
                animDelay={500}
                animateDuration={5000}
                needleColor={"#BFB0BF"}
                needleBaseColor={"#BFB0BF"}
              />
              <h6>Air Quality</h6>
            </p>
          </div>
          <div className="col-2"></div>
        </div>

        <div className="row mt-3 align-items-center">
          <div className="col-2"></div>
          <div className="col-4">
            <p>
              <GaugeChart
                percent={cleanliness / 100}
                id="pollutionClean"
                arcsLength={[0.33, 0.33, 0.33]}
                colors={["red", "yellow", "green"]}
                arcPadding={0.02}
                textColor="#000000"
                animate={true}
                animDelay={500}
                animateDuration={5000}
                needleColor={"#BFB0BF"}
                needleBaseColor={"#BFB0BF"}
              />
              <h6>Cleanliness & Tidiness</h6>
            </p>
          </div>
          <div className="col-4">
            <p>
              <GaugeChart
                percent={greenParksQuality / 100}
                id="pollutionIdx"
                arcsLength={[0.33, 0.33, 0.33]}
                colors={["red", "yellow", "green"]}
                arcPadding={0.02}
                textColor="#000000"
                animate={true}
                animDelay={500}
                animateDuration={5000}
                needleColor={"#BFB0BF"}
                needleBaseColor={"#BFB0BF"}
              />
              <h6>Quality of Green Spaces</h6>
            </p>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    );
  }
}

export default Pollution_Chart;
