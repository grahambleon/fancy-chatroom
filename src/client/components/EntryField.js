import React from 'react';

const EntryField = (props) => {
  return (
    <form onSubmit={props.send}>
      <label>Username: </label>
      <input
        name='usernameField'
        type='text'
        value={props.username}
        onChange={props.handleChange}
      /><button type='button' onClick={props.changeUsername}>Change Name</button><br/>
      <label>Message: </label>
      <input
        name='message'
        type='text'
        value={props.message}
        onChange={props.handleChange}
      />
      <button>Send</button>
    </form>
  );
}

export default EntryField;
