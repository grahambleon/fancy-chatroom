import React, { Component } from 'react';

class EntryField extends Component {
  render() {
    return (
      <form onSubmit={this.props.send}>
        <span>Username: </span>
        <input
          name='username'
          type='text'
          value={this.props.username}
          onChange={this.props.handleChange}
        /><br/>
        <input
          name='message'
          type='text'
          value={this.props.message}
          onChange={this.props.handleChange}
        />
        <button>Send</button>
      </form>
    );
  }
}

export default EntryField;
