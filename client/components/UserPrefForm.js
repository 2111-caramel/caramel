import React from "react";
import { connect } from "react-redux";
import { fetchThreeCities } from "../store/threeCities";
import GaugeChart from "react-gauge-chart";

class UserPrefForm extends React.Component {
  constructor() {
    super();
    this.state = { values: [] };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // componentDidMount() {}
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.value !== this.state.value) {
  //     this.props.match.params.model = this.state.value;
  //     this.props.history.push(`/preferences/${this.state.value}`);
  //     console.log("PARAMS HERE---->", this.props.match.params);
  //     this.props.gettingThreeCities(this.state.value);
  //     this.props.loadCities;
  //     // console.log("Params ID---->>>", this.props.match.params);
  //   }
  // }

  handleClick(e) {
    this.setState({
      values: [...this.state.values, e.target.value],
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.gettingThreeCities(this.state.values);
  }

  render() {
    console.log("this.state", this.state.values);
    return (
      <div className="container-fluid justify-content-center">
        <h1>What is most important to you in a city?</h1>
        <form className="row justify-content-center mb-3">
          <div>
            <button
              type="button"
              value="primaryStats"
              onClick={this.handleClick}
            >
              Low Rent
            </button>
          </div>
          <div>
            <button type="button" value="Healthcare" onClick={this.handleClick}>
              Quality Healthcare
            </button>
          </div>
          <div>
            <button type="button" value="Pollution" onClick={this.handleClick}>
              Low Pollution
            </button>
          </div>
          <div>
            <button
              type="button"
              value="Transportation"
              onClick={this.handleClick}
            >
              Good Public Transportation
            </button>
          </div>
          <div>
            <button type="button" value="LivingCost" onClick={this.handleClick}>
              Low Daycare Cost
            </button>
          </div>
          <div>
            <button type="button" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </form>

        <div className="row justify-content-center mb-3">
            {this.props.loadCities.map((city, idx) => {
              return (
                <div className="col-4"key={idx}>
                  <div className="container text-center">
                    <div className="row justify-content-center compare-city-name mb-2">
                      <a href={`/cities/${city.city.id}`}><h2>{city.city.name}</h2></a>
                      <img
                        className="city-image"
                        src={city.city.imageUrlMobile}
                      ></img>
                      <p>{city.city.info}</p>
                    </div>
                    {/* <h2>{`${idx + 1}) ${city.city.name}, ${city.city.state}`}</h2>
                <img></img>
                <div className="col"> */}
                    {/* <GaugeChart
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
                  <h6>Overall {this.state.value} Rating</h6> */}
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
  return {
    loadCities: state.threeCities,
  };
};

const mapDispatch = (dispatch) => {
  return {
    gettingThreeCities: (selection) => dispatch(fetchThreeCities(selection)),
  };
};
export default connect(mapState, mapDispatch)(UserPrefForm);
