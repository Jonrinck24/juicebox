const PORT=6543;
const express = require('express');
const server = express();
// const app = express();
const morgan = require ('morgan');
server.use(morgan('dev'));
server.use(express.json())

const {client} = require ('./db');
client.connect();



server.listen(PORT, ()=> {
    // console.log ('The server is up on port', PORT)
})


server.use((req, res, next)=>{
    console.log("<___BODY Logger START___>");
    console.log(req.body);
    console.log("<_____Body loger END_____ ")
    next();
})

// app.use('/api',(req, res, next)=> {
//     console.log("A request was made to /api");
//     next()
// });

// app.get('/api', (req, res, next)=> {
//     console.log("A get request was made to /api");
//     res.send({ message: "success"})
// })
server.post('/api/users/register', () => {});
server.post('/api/users/login', () => {});
server.delete('/api/user/:id', () => {});
server.get('api/posts', ()=> {});
server.post('/api/posts', ()=> {});
server.patch('/api/posts/:id', ()=> {});
server.delete('/api/posts/:id', ()=> {});
server.get('/api/tags', ()=> {});
server.get('/api/tags/:tagName/posts', ()=> {})


const apiRouter = require('./api');
server.use('/api', apiRouter)