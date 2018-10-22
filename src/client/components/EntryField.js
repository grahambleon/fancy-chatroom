import React, { Component } from 'react';
import socketIOClient from 'socket.io-client'

class EntryField extends Component {
  render() {
    return (
      <React.Fragment>
        <span>Username: </span>
        <input
          name='username'
          type='text'
          value={this.props.username}
          onChange={this.handleChange}
        /><br/>
        <input
          name='input'
          type='text'
          value={this.props.input}
          onChange={this.handleChange}
        />
        <button onClick={this.props.send}>Send</button>
      </React.Fragment>
    );
  }
}

export default EntryField;
