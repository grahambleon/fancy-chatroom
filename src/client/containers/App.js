import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'
import EntryField from '../components/EntryField'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      endpoint: "/",
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
    const socket = socketIOClient(this.state.endpoint)

    return (
      <React.Fragment>
        <EntryField/>
      </React.Fragment>
    );
  }
}

export default App;
