import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getCity } from '../store/singleCity'

/**
 * COMPONENT
 */
class SingleCity extends Component {

  componentDidMount(){
    this.props.loadCity(this.match.params.cityId)
    console.log('state', this.state)

  }
  render(){
    const city = this.props.singleCity || 0;
    console.log('props', this.props)
    return (
      <div>
        <h3>New York City</h3>
        {/* {weather.map((month, index)=>
        <div key={index}>
          <h4>{month.name}</h4>
          <h6>{month.avgMinTemp_F} - {month.absMaxTemp_F}</h6>
        </div>
        )}
        <h3>Beer {beer}</h3>
        <h3>Salary {salary}</h3>
        <h3>Rent {rent}</h3> */}
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
    loadCity: (cityId) => dispatch(getCity(cityId)),
  }
}


export default connect(mapState,mapDispatch)(SingleCity)
