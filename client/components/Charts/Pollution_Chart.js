import React from "react";
import GaugeChart from "react-gauge-chart";
import "chart.js/auto";

class Pollution_Chart extends React.Component {
  render(){
    const { indexPollution } = this.props.pollution;
    console.log("PROPS FROM POLLUTION CHART COMPONENT", this.props)

  return (
    <div key="pie-chart" className="container-fluid text-center">
      <div className="row justify-content-center">
        <div className="col-4">
          <GaugeChart
            percent={indexPollution/100}
            id="pollutionIdx"
            arcsLength={[0.33, 0.33, 0.33]}
            colors={["red", "yellow", "green"]}
            arcPadding={0.02}
            textColor="#333"
            animate={true}
            animDelay={500}
            animateDuration={5000}
          /> 
          <h5>Overall Pollution Rating</h5>
        </div>
        
      </div>
    </div>
  );
}}

export default Pollution_Chart;
