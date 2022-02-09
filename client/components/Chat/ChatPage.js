import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MessagesList from './MessagesList';
import { fetchMessages } from '../../store/chat'

export class Main extends Component {

  componentDidMount () {
    this.props.loadMessages()
  }

  render () {
    return (
      <div>
        <Sidebar />
        <Navbar />
        <main>
            <MessagesList />
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadMessages: () => dispatch(fetchMessages()),
})

export default connect(null, mapDispatchToProps)(Main)