import React, { Component } from 'react';

class EntryField extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: 'Anonymous',
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <form>
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
      </form>
    );
  }
}

export default EntryField;
