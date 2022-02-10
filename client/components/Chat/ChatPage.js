import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MessageList from './MessageList';
import { fetchMessages } from '../../store/chat'

class Main extends Component {

  componentDidMount () {
    this.props.loadMessages()
  }

  render () {
    return (
      <div>
        <Sidebar />
        <Navbar />
        <main>
            <MessageList />
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadMessages: () => dispatch(fetchMessages()),
})

export default connect(null, mapDispatchToProps)(Main)