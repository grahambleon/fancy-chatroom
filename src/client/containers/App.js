import React, { Component } from 'react';
import EntryField from '../components/EntryField'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>
        <EntryField/>
      </React.Fragment>
    );
  }
}

export default App;
