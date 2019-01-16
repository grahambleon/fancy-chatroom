import React, { Component } from 'react'

class ChatBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      chat: []
    }
  }

  render() {
    let messages = this.state.chat.map(message => {
      return(
        <li>{message.username}: {message.message}</li>
      )
    })

    return (
      <ul>
        {messages}
      </ul>
    )
  }
}

export default ChatBox;
