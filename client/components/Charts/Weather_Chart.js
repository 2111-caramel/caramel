import React from "react";
import { connect } from "react-redux";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const Weather_Chart = (props) => {
  console.log("WEATHER CHART PROPS: ", props);
  let weatherMinTemps = props.weather.map((month) => {
    return month.avgMinTemp;
  });
  let weatherMaxTemps = props.weather.map((month) => {
    return month.avgMaxTemp;
  });
  let months = props.weather.map((month) => {
    return month.month;
  });

  return (
    <div key="bar-chart">
      <Bar
        data={{
          datasets: [
            {
              data: weatherMinTemps, weatherMaxTemps,
              backgroundColor: ["blue", "green"],
            },
          ],
          labels: months,
        }}
        options={{
          title: {
            display: true,
            text: "Transportation Chart",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};

export default Weather_Chart;
