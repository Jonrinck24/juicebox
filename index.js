
// const PORT= 6543;
const express = require('express');
const server = express();

require('dotenv').config();

const morgan = require ('morgan');
server.use(morgan('dev'));
server.use(express.json())

const {client} = require ('./db');
client.connect();

const PORT = process.env.PORT || 6543;

server.use((req, res, next)=>{
    console.log("<___BODY Logger START___>");
    console.log(req.body);
    console.log("<_____Body loger END_____ ")
    next();
})


server.get('/background/:color', (req, res, next) => {
    res.send(`
      <body style="background: ${ req.params.color };">
        <h1>Hello World</h1>
      </body>
    `);
  });



const apiRouter = require('./api');
server.use('/api', apiRouter);

server.listen(PORT, ()=> {
    console.log ('The server is up on port', PORT)
})