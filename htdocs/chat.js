//Make Connection.
var socket = io.connect(`http://localhost:8080`);
var input = document.getElementById('input'),
    username = document.getElementById('username'),
    btn = document.getElementById('send'),
    messages = document.getElementById('messages');

btn.addEventListener('click', () => {
    socket.emit('chat', {
        username: username.value,
        message: input.value
    });
});

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {//ENTER
        event.preventDefault();
        btn.click();
        input.value = "";
    }
});

socket.on('chat', data => {
    messages.innerHTML += `<p><strong>${data.username}: </strong>${data.message}</p>`;
    messages.scrollTop = messages.scrollHeight;
});