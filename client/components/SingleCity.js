import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getCity } from '../store/singleCity'
//import Transportation_Chart from './Charts/Transportation_Chart'

class SingleCity extends Component {

  componentDidMount(){
    this.props.loadCity(this.props.match.params.cityId)
    console.log('state', this.state)

  }
  render(){
    const city = this.props.singleCity[0] || 0;
    const healthcare = city.healthcare|| {}
    const livingCost = city.livingCost ||{}
    const primaryStat = city.primaryStat || {}
    const transportation = city.transportation || {}

    return (
      <div>
        <h2>{city.name}</h2>
        <h3>Healthcare</h3>
        {/* this doesn't work come back to this*/}
            {/* {Object.keys(healthcare).map(category => {
              return(
              <p>{category} : {category}</p>
              )
            })} */}
            <p>Cost {healthcare.cost}</p>
            <p>Skill {healthcare.skill}</p>
            <p>Index {healthcare.index}</p>
        <h3>Living Costs</h3>
          <p>Daycare: {livingCost.daycare}</p>
          <p>Beer: {livingCost.beer}</p>
          <p>Bread: {livingCost.bread}</p>
        <h3>Primary Stats</h3>
          <p>1 BDRM: {primaryStat.rent1br}</p>
          <p>3 BDRM: {primaryStat.rent3br}</p>
          <p>Salary: {primaryStat.salary}</p>
        <h3>Transportation</h3>
          {/* <Transportation_Chart transportation = {transportation}/> */}
          <p>Bike: {transportation.bike}</p>
          <p>Car: {transportation.car}</p>
          <p>Train: {transportation.train}</p>
        {/* <h3>Climate</h3>
          <p>{}</p>
          <p>{}</p>
          <p>{}</p> */}
      </div>
    )
  }
}

const mapState = state => {
  return {
    singleCity: state.singleCity
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadCity: (cityId) => dispatch(getCity(cityId)),
  }
}


export default connect(mapState,mapDispatch)(SingleCity)
