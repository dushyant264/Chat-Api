const express = require('express');
const { chats } = require('./data/data');
const dotenv = require('dotenv');
const cors= require('cors');

const app = express();
app.use(cors());
dotenv.config(); 

app.get("/", (req, res) => {
    res.send('API is running smoothly...');
});

app.get("/api/chat", (req, res) => {
    res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
    const chat = chats.find((c) => c._id === req.params.id);
    res.send(chat);
});

const Port= process.env.Port || 5000;

app.listen(5000, console.log(`Server running on port ${Port}`));