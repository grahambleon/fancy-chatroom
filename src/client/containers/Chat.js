import React, { Component } from 'react'
import io from 'socket.io-client'
import EntryField from '../components/EntryField'
import ChatBox from '../components/ChatBox'

class Chat extends Component {
  constructor(props){
    super(props)
    this.state = {
      endpoint: 'http://localhost:4001/',
      chat: [],
      username: 'Anonymous',
      usernameField: 'Anonymous',
      message: ''
    }
    this.changeUsername = this.changeUsername.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.send = this.send.bind(this)
    this.socket = io(this.state.endpoint)
  }

  changeUsername() {
    const payload = {
      newName: this.state.usernameField,
      oldName: this.state.username,
      id: `${Date.now()}${this.state.username}`
    }
    this.socket.emit('namechange', payload)
    this.setState({ username: this.state.usernameField })
  }

  componentDidMount() {
    this.socket.on('message', payload => {
      this.setState({ chat: this.state.chat.concat(
        <li key={payload.id}>{payload.username}: {payload.message}</li>
      )})
    })

    this.socket.on('namechange', payload => {
      this.setState({ chat: this.state.chat.concat(
        <li key={payload.id}>{payload.oldName} has changed their name to {payload.newName}</li>
      )})
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
          username={this.state.usernameField}
          changeUsername={this.changeUsername}
          message={this.state.message}
        />
      </React.Fragment>
    );
  }
}

export default Chat;
