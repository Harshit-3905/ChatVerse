const express = require('express');
const app = express();

const { chats } = require('./data/data');

const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 5000;
app.get('/', (req, res) =>{
    res.send('Hello World! ');
});

app.get("/api/chat", (req, res) =>{
    res.send(chats);
});
app.get("/api/chat/:id", (req, res) =>{
    // console.log(req.params.id);
    const singleChat = chats.find((chat) => chat._id === req.params.id);
    res.send(singleChat);
});


app.listen(port, () => 
    console.log(`Listening on port ${port}`)
);