import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import Sidebar from './Sidebar';
import MessageList from './MessageList';
import DummyComponent from './DummyComponent'
import { fetchMessages } from '../../store/chat'

class Main extends Component {

  componentDidMount () {
    this.props.loadMessages()
  }

  render () {
    //console.log("chat page props", this.props)
    return (
      <div>
        <Sidebar />
        <main>
          <DummyComponent />
            {/* <MessageList channelId = {this.props.match.params.channelId}/> */}
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadMessages: () => dispatch(fetchMessages()),
})

export default connect(null, mapDispatchToProps)(Main)