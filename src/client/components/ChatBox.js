import React from 'react'

const ChatBox = (props) => {
  let messages = props.chat.map(message => {
    return(
      <li key={message.id}>{message.username}: {message.message}</li>
    )
  })

  return (
    <ul>
      {messages}
    </ul>
  )
}

export default ChatBox;
