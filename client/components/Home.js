import React from 'react'
import {connect} from 'react-redux'
import AllCities from './AllCities'

/**
 * COMPONENT
 */
export const Home = props => {
  const {username} = props

  return (
    <div>
      <AllCities/>
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
