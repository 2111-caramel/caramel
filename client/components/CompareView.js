import React from "react";
import { fetchCities } from "../store/cities";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CitySelect from "./CitySelect";
import SingleCity from "./SingleCity";
import CompareCity from "./CompareCity";

export class CompareView extends React.Component {

  constructor() {
    super();
    this.state = {
      value1: "",
      value2: "",
      value3: ""

    };
    this.handleChange1 = this.handleChange1.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.handleChange3 = this.handleChange3.bind(this)


  }
  componentDidMount() {
    this.props.getCities();
  }
  handleChange1(e) {
    this.setState({
      ...this.state,
      value1: e.target.value
    });
  }
  handleChange2(e) {
    this.setState({
      ...this.state,

      value2: e.target.value
    });
  }
  handleChange3(e) {
    this.setState({
      ...this.state,

      value3: e.target.value
    });
  }

  render() {
    const { value1, value2, value3 } = this.state;
    const cities = this.props.cities;
    console.log(this.state);
    return (
      <div>
        {/* <CitySelect filter1={this.state.filter1}/>
        <CitySelect filter2={this.state.filter2}/>
        <CitySelect filter3={this.state.filter3}/> */}
        <div>
          <label htmlFor="select">City:</label>
          <select name="select" value={value1} onChange={this.handleChange1}>
            {cities.map((city, index) => (
              <option key={index} value={city.name}>{city.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="select">City:</label>
          <select name="select" value={value2} onChange={this.handleChange2}>
            {cities.map((city, index) => (
              <option key={index} value={city.name}>{city.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="select">City:</label>
          <select name="select" value={value3} onChange={this.handleChange3}>
            {cities.map((city, index) => (
              <option key={index} value={city.name}>{city.name}</option>
            ))}
          </select>
        </div>
        <CompareCity name={this.state.value1}/>
        <CompareCity name={this.state.value2}/>
        <CompareCity name={this.state.value3}/>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    cities: state.cities
  };
};

const mapDispatch = (dispatch) => ({
  getCities: () => dispatch(fetchCities()),
});

export default connect(mapState, mapDispatch)(CompareView);
