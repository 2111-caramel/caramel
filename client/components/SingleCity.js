import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getWeather } from '../store/singleCity'

/**
 * COMPONENT
 */
class SingleCity extends Component {

  componentDidMount(){
    this.props.loadWeather()
    console.log('state', this.state)

  }
  render(){
    const weather = this.props.singleCity.month || [];
    console.log('props', this.props)
    console.log(weather, 'WEATHER')
    return (
      <div>
        <h3>New York Weather</h3>
        {weather.map((month, index)=>
        <div key={index}>
          <h4>{month.name}</h4>
          <h6>{month.avgMinTemp_F} - {month.absMaxTemp_F}</h6>
        </div>

        )}
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
    loadWeather: () => dispatch(getWeather())
  }
}


export default connect(mapState,mapDispatch)(SingleCity)
