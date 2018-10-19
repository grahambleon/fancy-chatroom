const express = require('express');
const http = require('http');
const io = require('socket.io')(http);

const app = express();
const port = process.env.PORT || 5000;

io.on('connection', (socket) => {
  console.log('a user has connected')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`));
