import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'
import EntryField from '../components/EntryField'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      endpoint: "http://192.168.49.185:5000"
    }
  }

  componentDidMount() {
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
