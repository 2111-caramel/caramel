import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const Transportation_Chart = (props) => {
  const { car, bike, train, walking, bus, motorbike, workFromHome } =
    props.transportation;

  return (
    <div key="pie-chart">
      <Pie
        data={{
          datasets: [
            {
              data: [car, train, bike, walking, bus, workFromHome, motorbike],
              backgroundColor: [
                "blue",
                "green",
                "pink",
                "yellow",
                "orange",
                "red",
                "purple",
              ],
            },
          ],
          labels: [
            "Car",
            "Train",
            "Bike",
            "Walking",
            "Bus",
            "Work From Home",
            "Motorbike",
          ],
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

export default Transportation_Chart;
