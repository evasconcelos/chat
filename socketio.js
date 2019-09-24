const io = require('socket.io')();
const port = 8000;
io.listen(port);
console.log('listening on port ', port);

io.on('connection', function(socket) {
  socket.on('CHAT_MSG', function(msg) {
    io.emit('CHAT_MSG', msg);
  });
});
