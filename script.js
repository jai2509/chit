import React, { useState } from "react";

function Chatting() {
  const [messages, setMessages] = useState([
    { text: "Hello, how are you?", time: "10:00 am" },
    { text: "I'm good, thanks for asking.", time: "10:02 am" },
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      const newMessage = {
        text: inputValue,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
    }
  };

  return (
    <div>
      <header>
        <h1>Chatting Website</h1>
      </header>
      <main>
        <div className="chat-box">
          {messages.map((message, index) => (
            <div key={index} className="message">
              <p>{message.text}</p>
              <span className="time">{message.time}</span>
            </div>
          ))}
        </div>
        <form className="message-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Type your message here"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit">Send</button>
        </form>
      </main>
      <footer>
        <p>&copy; 2023 Chatting Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Chatting;
import React, { useState } from "react";
import "./style.css";

function Chatting() {
  const [messages, setMessages] = useState([
    { text: "Hello, how are you?", time: "10:00 am" },
    { text: "I'm good, thanks for asking.", time: "10:02 am" },
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      const newMessage = {
        text: inputValue,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
    }
  };
}const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log(`User ${socket.id} connected`);

  socket.on('message', (message) => {
    console.log(`User ${socket.id} sent message: ${message}`);
    io.emit('message', { user: socket.id, message: message, time: new Date() });
  });

  socket.on('disconnect', () => {
    console.log(`User ${socket.id} disconnected`);
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


  
