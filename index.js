const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', function(socket) {
    console.log('New client conected');
    socket.emit('message', 'Welcome');
})

setInterval(function() {
    io.emit('message', 'Hello, I am writing to everyone');
}, 3000);

server.listen(8080, function() {
    console.log('Server started in http://localhost:8080');
});