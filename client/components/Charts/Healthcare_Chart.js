import React from "react";
import GaugeChart from "react-gauge-chart";
import "chart.js/auto";

const Healthcare_Chart = (props) => {
  const { skill, cost, index } = props.healthcare;
  const skillPercent = skill / 100;
  const costPercent = cost / 100;
  const indexPercent = index / 100;

  return (
    <div key="pie-chart" className="container">
      <div className="row align-items-center">
        <div className="col-1"></div>
        <div className="col-3">
          <GaugeChart
            percent={skillPercent}
            id="healthSkill"
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
          Skill Rating
        </div>

        <div className="col-4">
          <GaugeChart
            id="healthIndex"
            arcsLength={[0.33, 0.33, 0.33]}
            colors={["red", "yellow", "green"]}
            percent={indexPercent}
            arcPadding={0.02}
            textColor="#000000"
            needleColor={"#BFB0BF"}
            needleBaseColor={"#BFB0BF"}
          />
          <div>
            <h6 style={{ display: "inline" }}>Overall Healthcare Rating</h6>{" "}
            <a
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="About Overall Healthcare Rating: This figure is an estimation of the overall quality of the city's health care system, health care professionals, equipment, staff, doctors, cost, etc., based on surveys from visitors to the website Numbeo.com, a cost of living database."
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
          </div>
        </div>

        <div className="col-3">
          <GaugeChart
            id="healthCost"
            arcsLength={[0.33, 0.33, 0.33]}
            colors={["red", "yellow", "green"]}
            percent={costPercent}
            arcPadding={0.02}
            textColor="#000000"
            needleColor={"#BFB0BF"}
            needleBaseColor={"#BFB0BF"}
          />
          Cost Rating
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default Healthcare_Chart;

// (const gauge = () => {
// 	if (!window.Chart) {
// 		return;
// 	}
// 	function GaugeChartHelper() {
// 	}
// 	GaugeChartHelper.prototype.setup = function(chart, config) {
// 		this.chart = chart;
// 		this.ctx = chart.ctx;
// 		this.limits = config.data.datasets[0].gaugeLimits;
// 		this.data = config.data.datasets[0].gaugeData;
// 		var options = chart.options;
// 		this.fontSize = options.defaultFontSize;
// 		this.fontStyle = options.defaultFontFamily;
// 		this.fontColor = options.defaultFontColor;
// 		this.ctx.textBaseline = "alphabetic";
// 		this.arrowAngle = 25 * Math.PI / 180;
// 		this.arrowColor = config.options.indicatorColor || options.arrowColor;
// 		this.showMarkers = typeof(config.options.showMarkers) === 'undefined' ? true : config.options.showMarkers;
// 		if (config.options.markerFormatFn) {
// 			this.markerFormatFn = config.options.markerFormatFn;
// 		} else {
// 			this.markerFormatFn = function(value) {
// 				return value;
// 			}
// 		}
// 	};
// 	GaugeChartHelper.prototype.applyGaugeConfig = function(chartConfig) {
// 		this.calcLimits();
// 		chartConfig.data.datasets[0].data = this.doughnutData;
// 		var ctx = this.ctx;
// 		var labelsWidth = this.limits.map(function(label){
// 			var text = this.markerFormatFn(label);
// 			return ctx.measureText(text).width;
// 		}.bind(this));
// 		var padding = Math.max.apply(this, labelsWidth) + this.chart.width / 35;
// 		var heightRatio = this.chart.height / 50;
// 		chartConfig.options.layout.padding = {
// 			top: this.fontSize + heightRatio,
// 			left: padding,
// 			right: padding,
// 			bottom: heightRatio * 2
// 		};
// 	};
// 	GaugeChartHelper.prototype.calcLimits = function() {
// 		var limits = this.limits;
// 		var data = [];
// 		var total = 0;
// 		for (var i = 1, ln = limits.length; i < ln; i++) {
// 			var dataValue = Math.abs(limits[i] - limits[i - 1]);
// 			total += dataValue;
// 			data.push(dataValue);
// 		}
// 		this.doughnutData = data;
// 		var minValue = limits[0];
// 		var maxValue = limits[limits.length - 1];
// 		this.isRevers = minValue > maxValue;
// 		this.minValue = this.isRevers ? maxValue : minValue;
// 		this.totalValue = total;
// 	};
// 	GaugeChartHelper.prototype.updateGaugeDimensions = function() {
// 		var chartArea = this.chart.chartArea;
// 		this.gaugeRadius = this.chart.innerRadius;
// 		this.gaugeCenterX = (chartArea.left + chartArea.right) / 2;
// 		this.gaugeCenterY = (chartArea.top + chartArea.bottom + this.chart.outerRadius) / 2;
// 		this.arrowLength = this.chart.radiusLength * 2;
// 	};
// 	GaugeChartHelper.prototype.getCoordOnCircle = function(r, alpha) {
// 		return {
// 			x: r * Math.cos(alpha),
// 			y: r * Math.sin(alpha)
// 		};
// 	};
// 	GaugeChartHelper.prototype.getAngleOfValue = function(value) {
// 		var result = 0;
// 		var gaugeValue = value - this.minValue;
// 		if (gaugeValue <= 0) {
// 			result = 0;
// 		} else if (gaugeValue >= this.totalValue) {
// 			result = Math.PI;
// 		} else {
// 			result = Math.PI * gaugeValue / this.totalValue;
// 		}
// 		if (this.isRevers) {
// 			return Math.PI - result;
// 		} else {
// 			return result;
// 		}
// 	};
// 	GaugeChartHelper.prototype.renderLimitLabel = function(value) {
// 		var ctx = this.ctx;
// 		var angle = this.getAngleOfValue(value);
// 		var coord = this.getCoordOnCircle(this.chart.outerRadius + (this.chart.radiusLength / 2), angle);
// 		var align;
// 		var diff = angle - (Math.PI / 2);
// 		if (diff > 0) {
// 			align = "left";
// 		} else if (diff < 0) {
// 			align = "right";
// 		} else {
// 			align = "center";
// 		}
// 		ctx.textAlign = align;
// 		ctx.font = this.fontSize + "px " + this.fontStyle;
// 		ctx.fillStyle = this.fontColor;
// 		var text = this.markerFormatFn(value);
// 		ctx.fillText(text, this.gaugeCenterX - coord.x, this.gaugeCenterY - coord.y);
// 	};
// 	GaugeChartHelper.prototype.renderLimits = function() {
// 		for (var i = 0, ln = this.limits.length; i < ln; i++) {
// 			this.renderLimitLabel(this.limits[i]);
// 		}
// 	};
// 	GaugeChartHelper.prototype.renderValueLabel = function() {
// 		var label = this.data.value.toString();
// 		var ctx = this.ctx;
// 		ctx.font = "30px " + this.fontStyle;
// 		var stringWidth = ctx.measureText(label).width;
// 		var elementWidth = 0.75 * this.gaugeRadius * 2;
// 		var widthRatio = elementWidth / stringWidth;
// 		var newFontSize = Math.floor(30 * widthRatio);
// 		var fontSizeToUse = Math.min(newFontSize, this.gaugeRadius);
// 		ctx.textAlign = "center";
// 		ctx.font = fontSizeToUse + "px " + this.fontStyle;
// 		ctx.fillStyle = this.data.valueColor || this.fontColor;
// 		ctx.fillText(label, this.gaugeCenterX, this.gaugeCenterY);
// 	};
// 	GaugeChartHelper.prototype.renderValueArrow = function(value) {
// 		var angle = this.getAngleOfValue(typeof value === "number" ? value : this.data.value);
// 		this.ctx.globalCompositeOperation = "source-over";
// 		this.renderArrow(this.gaugeRadius, angle, this.arrowLength, this.arrowAngle, this.arrowColor);
// 	};
// 	GaugeChartHelper.prototype.renderSmallValueArrow = function(value) {
// 		var angle = this.getAngleOfValue(value);
// 		this.ctx.globalCompositeOperation = "source-over";
// 		this.renderArrow(this.gaugeRadius - 1, angle, this.arrowLength - 1, this.arrowAngle, this.arrowColor);
// 	};
// 	GaugeChartHelper.prototype.clearValueArrow = function(value) {
// 		var angle = this.getAngleOfValue(value);
// 		this.ctx.lineWidth = 2;
// 		this.ctx.globalCompositeOperation = "destination-out";
// 		this.renderArrow(this.gaugeRadius - 1, angle, this.arrowLength + 1, this.arrowAngle, "#FFFFFF");
// 		this.ctx.stroke();
// 	};
// 	GaugeChartHelper.prototype.renderArrow = function(radius, angle, arrowLength, arrowAngle, arrowColor) {
// 		var coord = this.getCoordOnCircle(radius, angle);
// 		var arrowPoint = {
// 			x: this.gaugeCenterX - coord.x,
// 			y: this.gaugeCenterY - coord.y
// 		};
// 		var ctx = this.ctx;
// 		ctx.fillStyle = arrowColor;
// 		ctx.beginPath();
// 		ctx.moveTo(arrowPoint.x, arrowPoint.y);
// 		coord = this.getCoordOnCircle(arrowLength, angle + arrowAngle);
// 		ctx.lineTo(arrowPoint.x + coord.x, arrowPoint.y + coord.y);
// 		coord = this.getCoordOnCircle(arrowLength, angle - arrowAngle);
// 		ctx.lineTo(arrowPoint.x + coord.x, arrowPoint.y + coord.y);
// 		ctx.closePath();
// 		ctx.fill();
// 	};
// 	GaugeChartHelper.prototype.animateArrow = function() {
// 		var stepCount = 30;
// 		var animateTimeout = 300;
// 		var gaugeValue = this.data.value - this.minValue;
// 		var step = gaugeValue / stepCount;
// 		var i = 0;
// 		var currentValue = this.minValue;
// 		var interval = setInterval(function() {
// 			i++;
// 			this.clearValueArrow(currentValue);
// 			if (i > stepCount) {
// 				clearInterval(interval);
// 				this.renderValueArrow();
// 			} else {
// 				currentValue += step;
// 				this.renderSmallValueArrow(currentValue);
// 			}
// 		}.bind(this), animateTimeout / stepCount);
// 	};
// 	Chart.defaults.tsgauge = {
// 		animation: {
// 			animateRotate: true,
// 			animateScale: false
// 		},
// 		cutoutPercentage: 95,
// 		rotation: Math.PI,
// 		circumference: Math.PI,
// 		legend: {
// 			display: false
// 		},
// 		scales: {},
// 		arrowColor: "#444"
// 	};
// 	Chart.controllers.tsgauge = Chart.controllers.doughnut.extend({
// 		initialize: function(chart) {
// 			var gaugeHelper = this.gaugeHelper = new GaugeChartHelper();
// 			gaugeHelper.setup(chart, chart.config);
// 			gaugeHelper.applyGaugeConfig(chart.config);
// 			chart.config.options.animation.onComplete = function(chartElement) {
// 				gaugeHelper.updateGaugeDimensions();
// 				gaugeHelper.animateArrow();
// 			};
// 			Chart.controllers.doughnut.prototype.initialize.apply(this, arguments);
// 		},
// 		draw: function() {
// 			Chart.controllers.doughnut.prototype.draw.apply(this, arguments);
// 			var gaugeHelper = this.gaugeHelper;
// 			gaugeHelper.updateGaugeDimensions();
// 			gaugeHelper.renderValueLabel();
// 			if (gaugeHelper.showMarkers) {
// 				gaugeHelper.renderLimits();
// 			}
// 			gaugeHelper.renderSmallValueArrow(gaugeHelper.minValue);
// 		}
// 	});
// })();
