import React, { Component } from 'react'
import io from 'socket.io-client'
import EntryField from '../components/EntryField'
import ChatBox from '../components/ChatBox'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      endpoint: 'http://localhost:4001/',
      chat: [],
      username: 'Anonymous',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.send = this.send.bind(this)
    this.socket = io(this.state.endpoint)
  }

  componentDidMount() {
    this.socket.on('message', (payload) => {
      this.setState({ chat: this.state.chat.concat(payload) });
    })
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  send(event) {
    event.preventDefault()

    const payload = {
      username: this.state.username,
      message: this.state.message,
      id: `${Date.now()}${this.state.username}`
    }
    this.socket.emit('message', payload)
    this.setState({ message: '' })
  }

  render() {
    return (
      <React.Fragment>
        <ChatBox chat={this.state.chat}/>
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
