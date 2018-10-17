const express = require('express');
const http = require('http');
const socket = require('socket.io')

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
