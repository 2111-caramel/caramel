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
            <h5>Overall Pollution Level</h5>
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
              <h6>Cleanliness</h6>
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
              <h6>Green Spaces</h6>
            </p>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    );
  }
}

export default Pollution_Chart;
