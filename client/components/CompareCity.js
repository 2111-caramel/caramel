import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getCityByName } from '../store/singleCity'

/**
 * COMPONENT
 */
class CompareCity extends Component {
  constructor(props){
    super()
    console.log(props,'pROPS IN CONSTRUCTOR')
  }

  componentDidUpdate(prevProps){
    console.log('LOOK HERE', this.props.name)
    if(prevProps.name != this.props.name){
      this.props.loadCity(this.props.name)
    }
  }

  render(){
    const city = this.props.singleCity.name || 0;
    // const healthcare = city.healthcare|| {}
    // const livingCost = city.livingCost ||{}
    // const primaryStats = city.primaryStats || {}
    // const transportation = city.transportation || {}
    console.log(this.props, 'hELLO')

    return (
      <div>
        <h2>{this.props.name}</h2>
        <h3>Living Costs</h3>
          {/* <p>Daycare: {livingCost.daycare}</p>
          <p>Beer: {livingCost.beer}</p>
          <p>Bread: {livingCost.bread}</p>
        <h3>Primary Stats</h3>
          <p>1 BDRM: {primaryStats.rent1bdrm}</p>
          <p>3 BDRM: {primaryStats.rent3bdrm}</p>
          <p>Salary: {primaryStats.salary}</p>
        <h3>Transportation</h3>
          <p>Bike: {transportation.bike}</p>
          <p>Car: {transportation.car}</p>
          <p>Train: {transportation.train}</p> */}
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
