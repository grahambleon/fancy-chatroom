import React, { Component } from 'react'
import io from 'socket.io-client'
import EntryField from '../components/EntryField'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      endpoint: 'http://localhost:4001/',
      username: 'Anonymous',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.send = this.send.bind(this)
    this.socket = io(this.state.endpoint)
  }

  componentDidMount() {
    this.socket.on('message', (payload) => {
      console.log(`${payload.username}: ${payload.message}`);
    })
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  send(event) {
    event.preventDefault()

    const payload = {
      username: this.state.username,
      message: this.state.message
    }
    this.socket.emit('message', payload)
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
