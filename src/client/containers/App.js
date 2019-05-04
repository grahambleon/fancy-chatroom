import React from 'react'
import styled from 'styled-components'
import Chat from './Chat.js'

const StyledChat = styled.div`
  text-align: center;
  border: thick black;
  width: 50%;
`

const App = () => {
  return(
    <StyledChat>
      <Chat />
    </StyledChat>
  )
}

export default App;
