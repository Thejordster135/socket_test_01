var express = require('express');
var app = express();
var server = app.listen(8080, () => {
    console.log(`Started listening on 8080.`);
});
app.use(express.static(`htdocs`));
var io = require('socket.io')(server);
io.on('connection', socket => {
    console.log(`New Socket: ${socket.id}`);
    socket.on('chat', data => {
        io.sockets.emit('chat', data);
        console.log(`${data.username}: ${data.message}`);
    });
});