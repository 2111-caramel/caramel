import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getWeather, getCostOfLiving, getTransportation, getPollution, getHealthcare } from '../store/singleCity'

/**
 * COMPONENT
 */
class SingleCity extends Component {

  componentDidMount(){
    this.props.loadWeather()
    this.props.loadCostOfLiving()
    this.props.loadTransportation()
    this.props.loadPollution()
    this.props.loadHealthcare()
  }
  render(){
    const weather = this.props.singleCity.weather.month || [];
    const beer = this.props.singleCity.beer || 0;
    const salary = this.props.singleCity.salary || 0;
    const rent = this.props.singleCity.rent || 0;
    console.log('props', this.props)
    return (
      <div>
        <h3>New York Weather</h3>
        {weather.map((month, index)=>
        <div key={index}>
          <h4>{month.name}</h4>
          <h6>{month.avgMinTemp_F} - {month.absMaxTemp_F}</h6>
        </div>
        )}
        <h3>Beer {beer}</h3>
        <h3>Salary {salary}</h3>
        <h3>Rent {rent}</h3>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    singleCity: state.singleCity
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadWeather: () => dispatch(getWeather()),
    loadCostOfLiving: () => dispatch(getCostOfLiving()),
    loadTransportation: () => dispatch(getTransportation()),
    loadPollution: () => dispatch(getPollution()),
    loadHealthcare: () => dispatch(getHealthcare())
  }
}


export default connect(mapState,mapDispatch)(SingleCity)
