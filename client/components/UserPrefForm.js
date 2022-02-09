import React from "react";
import { connect } from "react-redux";
import { fetchThreeCities } from "../store/threeCitties";
import GaugeChart from "react-gauge-chart";

class UserPrefForm extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.props.match.params.model = this.state.value;
      this.props.history.push(`/preferences/${this.state.value}`);
      console.log("PARAMS HERE---->", this.props.match.params);
      this.props.gettingThreeCities(this.state.value);
      this.props.loadCities;
      // console.log("Params ID---->>>", this.props.match.params);
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    console.log("IN RENDER COMP--->>", this.props.loadCities);
    return (
      <div className="container-fluid justify-content-center">
        <h1>What is most important to you in a city?</h1>
        <form className="row justify-content-center mb-3">
          <h3>Primary Choices</h3>

          <select value={this.state.value} onChange={this.handleChange}>
            <option>- Select -</option>
            <option value="Healthcare">Quality Healthcare</option>
            <option value="Pollution">Low Pollution</option>
            <option value="Transportation">
              High Public Transportation (Train & Bus)
            </option>
            <option value="LivingCost">Lowest daycare cost</option>
            {/* <option value="Weather-warm">Warm Weather year round</option>
            <option value="Weather-snow">Snowy Winter Weather</option> */}
          </select>
        </form>

        <div>
          {this.props.loadCities.map((city, idx) => {
            return (
              <div className="row">
                <h2>{`${idx + 1}) ${city.city.name}, ${city.city.state}`}</h2>
                <div className="col">
                  <GaugeChart
                    id="healthIndex"
                    arcsLength={[0.33, 0.33, 0.33]}
                    colors={["red", "yellow", "green"]}
                    percent={
                      this.state.value === "Healthcare"
                        ? city.index / 100
                        : this.state.value === "Pollution"
                        ? city.indexPollution / 100
                        : this.state.value === "Transportation"
                        ? city.trainAndBus / 100
                        : this.state.value === "LivingCost"
                        ? city.daycare / 100
                        : ""
                    }
                    arcPadding={0.02}
                    textColor="#000000"
                    needleColor={"#BFB0BF"}
                    needleBaseColor={"#BFB0BF"}
                    style={{ width: "200px" }}
                  />
                  <h6>Overall {this.state.value} Rating</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  console.log("IN MY MAP STATE____>", state);
  return {
    loadCities: state.threeCities,
  };
};

const mapDispatch = (dispatch) => {
  //console.log("in map dispatch------>", dispatch(fetchThreeCities()));
  return {
    gettingThreeCities: (selection) => dispatch(fetchThreeCities(selection)),
  };
};
export default connect(mapState, mapDispatch)(UserPrefForm);
