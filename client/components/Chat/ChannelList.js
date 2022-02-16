import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

// These values are all hardcoded...for now!
// Soon, we'll fetch them from the server!
const RANDOM_CHANNEL = '/channels/1'
const GENERAL_CHANNEL = '/channels/2'
const DOGS_CHANNEL = '/channels/3'
const LUNCH_CHANNEL = '/channels/4'

export class ChannelList extends Component {
    render() {
        console.log("ChannelList props", this.props)

        // const filterMessageChannel = id =>
        //     this.props.messages.messages.filter(m => m.channelId === id)

        // const randomMessages = filterMessageChannel(1)
        // const generalMessages = filterMessageChannel(2)
        // const dogsMessages = filterMessageChannel(3)
        // const lunchMessages = filterMessageChannel(4)

        return (
            <h5>This should list the channels</h5>
            // <ul>

            //     <li>
            //         <NavLink to={RANDOM_CHANNEL} activeClassName="active">
            //             <span># really_random</span>
            //             <span className="badge">{ randomMessages.length }</span>
            //         </NavLink>
            //     </li>
            // </ul>
        )
    }
}

const mapState = state => ({
    messages: state.messages,
})

export default connect(mapState)(ChannelList)