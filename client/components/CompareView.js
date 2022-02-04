import React from "react";
import { fetchCities } from "../store/cities";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CitySelect from "./CitySelect";
import CompareCity from "./CompareCity";
import { getCityByName1, getCityByName2, getCityByName3 } from "../store/compareCities";

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
    this.handleSubmit1 = this.handleSubmit1.bind(this)
    this.handleSubmit2 = this.handleSubmit2.bind(this)
    this.handleSubmit3 = this.handleSubmit3.bind(this)
  }
  componentDidMount() {
    this.props.getCities();
  }

  handleChange1(e) {
    this.setState({
      value1: e.target.value
    });
    this.handleSubmit1(e.target.value)
  }

  handleChange2(e) {
    this.setState({
      value2: e.target.value
    });
    this.handleSubmit2(e.target.value)
  }

  handleChange3(e) {
    this.setState({
      value3: e.target.value
    });
    this.handleSubmit3(e.target.value)
  }

  handleSubmit1(value){
    this.props.getCompareCity1(value)
  }

  handleSubmit2(value){
    this.props.getCompareCity2(value)
  }

  handleSubmit3(value){
    this.props.getCompareCity3(value)
  }

  render() {
    const { value1, value2, value3 } = this.state;
    const cities = this.props.cities || [];
    console.log(this.props)
    const compareCities = this.props.compareCities || {};
    const city1 = compareCities.city1 || {};
    const city2 = compareCities.city2 || {}
    const city3 = compareCities.city3 || {}

    return (
      <div>
        {/* <CitySelect filter1={this.state.filter1}/>
        <CitySelect filter2={this.state.filter2}/>
        <CitySelect filter3={this.state.filter3}/> */}
        <div>
          <label htmlFor="select">City:</label>
          <select name="select" value={value1} onChange={(e)=>this.handleChange1(e)}>
            {cities.map((city, index) => (
              <option key={index} value={city.name}>{city.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="select">City:</label>
          <select name="select" value={value2} onChange={(e) => {this.handleChange2(e)}}>
            {cities.map((city, index) => (
              <option key={index} value={city.name}>{city.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="select">City:</label>
          <select name="select" value={value3} onChange={(e) => {this.handleChange3(e)}}>
            {cities.map((city, index) => (
              <option key={index} value={city.name}>{city.name}</option>
            ))}
          </select>
        </div>
        {city1.name ? <CompareCity city={city1}/> : null}
        {city2.name ? <CompareCity city={city2}/> : null}
        {city3.name ? <CompareCity city={city3}/> : null}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    cities: state.cities,
    compareCities: state.compareCity
  };
};

const mapDispatch = (dispatch) => ({
  getCities: () => dispatch(fetchCities()),
  getCompareCity1: (cityName) => dispatch(getCityByName1(cityName)),
  getCompareCity2: (cityName) => dispatch(getCityByName2(cityName)),
  getCompareCity3: (cityName) => dispatch(getCityByName3(cityName))

});

export default connect(mapState, mapDispatch)(CompareView);
