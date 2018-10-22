import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'
import EntryField from '../components/EntryField'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      endpoint: "/",
      username: 'Anonymous',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.send = this.send.bind(this)
    this.socket = socketIOClient(this.state.endpoint)

  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  send(event) {
    event.preventDefault()
    const socket = socketIOClient(this.state.endpoint),
      payload = {
        username: this.state.username,
        message: this.state.message
      }

    socket.emit('message', payload)
    this.setState({ message: '' })
  }

  render() {
    return (
      <React.Fragment>
        <EntryField
          handleChange={this.handleChange}
          send={this.send}
          username={this.state.username}
          message={this.state.message}
        />
      </React.Fragment>
    );
  }
}

export default App;
