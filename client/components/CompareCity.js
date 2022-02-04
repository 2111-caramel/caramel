import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getCityByName } from '../store/singleCity'

/**
 * COMPONENT
 */
class CompareCity extends Component {

  render(){
    console.log(this.props)
    const city = this.props.city || {};

    return (
      <div>
        <h2>{city.name}</h2>
        <h3>Healthcare</h3>
          <p>Cost {city.healthcare.cost}</p>
          <p>Skill {city.healthcare.skill}</p>
          <p>Index {city.healthcare.index}</p>
        <h3>Living Costs</h3>
          <p>Daycare: {city.livingCost.daycare}</p>
          <p>Beer: {city.livingCost.beer}</p>
          <p>Bread: {city.livingCost.bread}</p>
        <h3>Primary Stats</h3>
          <p>1 BDRM: {city.primaryStat.rent1br}</p>
          <p>3 BDRM: {city.primaryStat.rent3br}</p>
          <p>Salary: {city.primaryStat.salary}</p>
        <h3>Transportation</h3>
          <p>Bike: {city.transportation.bike}</p>
          <p>Car: {city.transportation.car}</p>
          <p>Train: {city.transportation.train}</p>

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
    loadCity: (cityId) => dispatch(getCityByName(cityId)),
  }
}


export default connect(mapState,mapDispatch)(CompareCity)
