import React, { Component } from 'react';
import socketIOClient from 'socket.io-client'

class EntryField extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: 'Anonymous',
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.send = this.send.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  send() {
    const socket = socketIOClient(this.state.endpoint)

    socket.emit(this.state)
  }

  render() {
    return (
      <React.Fragment>
        <span>Username: </span>
        <input
          name='username'
          type='text'
          value={this.state.username}
          onChange={this.handleChange}
        /><br/>
        <input
          name='input'
          type='text'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button onClick={this.send}>Send</button>
      </React.Fragment>
    );
  }
}

export default EntryField;
