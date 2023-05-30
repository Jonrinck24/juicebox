

const PORT= 6543;
const express = require('express');
const server = express();

require('dotenv').config();
// const app = express();
const morgan = require ('morgan');
server.use(morgan('dev'));
server.use(express.json())

const {client} = require ('./db');
client.connect();



server.use((req, res, next)=>{
    console.log("<___BODY Logger START___>");
    console.log(req.body);
    console.log("<_____Body loger END_____ ")
    next();
})





const apiRouter = require('./api');
server.use('/api', apiRouter);

server.listen(PORT, ()=> {
    console.log ('The server is up on port', PORT)
})