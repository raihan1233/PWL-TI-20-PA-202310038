import React from 'react'
import '/socket.io/socket.io.js'

const WebSocket = () => {
    var socket = io();

    var messages = document.getElementById('messages');
    var form = document.getElementById('form');
    var input = document.getElementById('input');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (input.value) {
            socket.emit('chat message', input.value);
            input.value = '';
        }
    });

    socket.on('the chat message', function(msg) {
        var item = document.createElement('li');
        item.textContent = msg;
        messages.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
    });

    return (
        <>
            <ul id="messages"></ul>
            <form id="form" action="">
                <input type="email" id="input" autocomplete="off" />
                <button>Send</button>
            </form>
        </>
    );
};

export default WebSocket;