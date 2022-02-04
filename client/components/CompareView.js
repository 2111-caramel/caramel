import React from "react";
import { fetchCities } from "../store/cities";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CitySelect from "./CitySelect";
import CompareCity from "./CompareCity";
import { getCityByName } from "../store/compareCities";

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
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.props.getCities();
  }

  handleChange1(e) {
    this.setState({
      value1: e.target.value
    });
    // this.props.getCompareCity(this.state.value1)
  }

  handleChange2(e) {
    this.setState({
      value2: e.target.value
    });
    console.log(this.state, 'in handlechange')
    // this.props.getCompareCity(this.state.value2)
  }

  handleChange3(e) {
    this.setState({
      value3: e.target.value
    });
  }

  handleSubmit(value){
    console.log('HELLO')
    this.props.getCompareCity(value)
  }

  render() {
    const { value1, value2, value3 } = this.state;
    const cities = this.props.cities;
    const compareCities = this.props.compareCities || [];
    console.log('COMPARECITIES', compareCities)
    console.log(this.props, 'PROPS')
    console.log(this.state);
    return (
      <div>
        {/* <CitySelect filter1={this.state.filter1}/>
        <CitySelect filter2={this.state.filter2}/>
        <CitySelect filter3={this.state.filter3}/> */}
        <div>
          <label htmlFor="select">City:</label>
          <select name="select" value={value1} onChange={(e, value) => {this.handleChange1(e); (value) =>this.handleSubmit(value)}}>
            {cities.map((city, index) => (
              <option key={index} value={city.name}>{city.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="select">City:</label>
          <select name="select" value={value2} onChange={(e) => {this.handleChange2(e); (value) =>this.handleSubmit(value)}}>
            {cities.map((city, index) => (
              <option key={index} value={city.name}>{city.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="select">City:</label>
          <select name="select" value={value3} onChange={(e) => {this.handleChange3(e); (value) =>this.handleSubmit(value)}}>
            {cities.map((city, index) => (
              <option key={index} value={city.name}>{city.name}</option>
            ))}
          </select>
        </div>
        {compareCities.map((city, index)=>
          <CompareCity key= {index} name={city}/>
        )}
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
  getCompareCity: (cityName) => dispatch(getCityByName(cityName))
});

export default connect(mapState, mapDispatch)(CompareView);
