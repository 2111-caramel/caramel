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

  handleClick(e) {
    if(!this.state.values.includes(e.target.value)){
      this.setState({
        values: [...this.state.values, e.target.value],
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.gettingThreeCities(this.state.values);
  }

  render() {
    return (
      <div className="container-fluid text-center">
        <h1 style={{margin: "20px"}}>What matters to you?</h1>
        <p style={{margin: "0px"}}>Select the most important things</p>
        <p>to get recommendations on where to live.</p>
        <form className="row justify-content-center mb-3">
          <div>
            <button className="btn btn-outline-secondary"
              type="button"
              value="primaryStats"
              onClick={this.handleClick} data-bs-toggle="button" aria-pressed="true" autoComplete="off"
            >
              Low Rent
            </button>
          </div>
          <div>
            <button type="button" value="Healthcare" onClick={this.handleClick} className="btn btn-outline-secondary" data-bs-toggle="button">
              Quality Healthcare
            </button>
          </div>
          <div>
            <button type="button" value="Pollution" onClick={this.handleClick} className="btn btn-outline-secondary" data-bs-toggle="button">
              Low Pollution
            </button>
          </div>
          <div>
            <button
              type="button"
              value="Transportation"
              onClick={this.handleClick} className="btn btn-outline-secondary" data-bs-toggle="button"
            >
              Good Public Transportation
            </button>
          </div>
          <div>
            <button type="button" value="LivingCost" onClick={this.handleClick} className="btn btn-outline-secondary" data-bs-toggle="button">
              Low Daycare Cost
            </button>
          </div>
          <div>
            <button type="button" onClick={this.handleSubmit} className="btn btn-primary btn-sm">
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
