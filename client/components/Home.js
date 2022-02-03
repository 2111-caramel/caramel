import React from 'react'
import {connect} from 'react-redux'
import AllCities from './AllCities'
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
export const Home = props => {
  const {username} = props

  return (
    <div className="container homepage" align="center">
<div className="row mb-5"></div>
<div className="row mb-5"></div>
<div className="row mb-5"></div>
<div className="row mb-5"></div>
<div className="row mb-5"></div>
      <div className="row">
    <div className="col-6">
    <h4>I know where I'm going.</h4><br/>
    <AllCities/>
    </div>
    <div className="col-6">
    <h4>I'm not sure where to go.</h4><br/>
    <a className="btn btn-primary" href="/" role="button">Take A Survey</a>
    </div>
  </div>
      
    </div>
    
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)
