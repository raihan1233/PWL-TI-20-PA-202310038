const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3002;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', msg => {
    console.log('message: ' + msg);
    io.emit('the chat message', msg);
  });
});

http.listen(3002, () => {
  console.log('listening on *:3002');
});