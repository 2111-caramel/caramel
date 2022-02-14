import React from "react";
import { connect } from "react-redux";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const Weather_Chart = (props) => {
  let minTempsObj = {};
  let maxTempsObj = {};
  let rainObj = {};

  let minTemps = props.weather.forEach((item) => {
    return (minTempsObj[item.month] = item.avgMinTemp);
  });
  let maxTemps = props.weather.forEach((item) => {
    return (maxTempsObj[item.month] = item.avgMaxTemp);
  });
  let rain = props.weather.forEach((item) => {
    return (rainObj[item.month] = item.avgDailyRainfall);
  });

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="container-fluid text-center">
      <div className="row justify-content-center mt-3">
        <div className="col-md-6 col-sm-12">
          <div key="bar-chart">
            <Bar
              data={{
                datasets: [
                  {
                    label: "Average Low (°F)",
                    data: [
                      minTempsObj.January,
                      minTempsObj.February,
                      minTempsObj.March,
                      minTempsObj.April,
                      minTempsObj.May,
                      minTempsObj.June,
                      minTempsObj.July,
                      minTempsObj.August,
                      minTempsObj.September,
                      minTempsObj.October,
                      minTempsObj.November,
                      minTempsObj.December,
                    ],
                    backgroundColor: ["blue"],
                  },
                  {
                    label: "Average High (°F)",
                    data: [
                      maxTempsObj.January,
                      maxTempsObj.February,
                      maxTempsObj.March,
                      maxTempsObj.April,
                      maxTempsObj.May,
                      maxTempsObj.June,
                      maxTempsObj.July,
                      maxTempsObj.August,
                      maxTempsObj.September,
                      maxTempsObj.October,
                      maxTempsObj.November,
                      maxTempsObj.December,
                    ],
                    backgroundColor: ["red"],
                  },
                ],
                labels: months,
              }}
              options={{
                title: {
                  display: true,
                  text: "Weather Chart",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <div key="bar-chart">
            <Bar
              data={{
                datasets: [
                  {
                    label: "Average Daily Rainfall (inches)",
                    data: [
                      rainObj.January,
                      rainObj.February,
                      rainObj.March,
                      rainObj.April,
                      rainObj.May,
                      rainObj.June,
                      rainObj.July,
                      rainObj.August,
                      rainObj.September,
                      rainObj.October,
                      rainObj.November,
                      rainObj.December,
                    ],
                    backgroundColor: ["blue"],
                  },
                ],
                labels: months,
              }}
              options={{
                title: {
                  display: true,
                  text: "Weather Chart",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather_Chart;
