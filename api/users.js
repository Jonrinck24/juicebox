const express = require ('express');
const usersRouter = express.Router();

usersRouter.use((req, res, next)=> {
    console.log(" A request is being made to /users ");
    // res.send ({ message: 'hello from /users '})
    next ();
});

// usersRouter.get('/', (req, res)=> {
//     res.send({
//         users:[]
//     })
// })
const { getAllUsers } = require('../db');

//update

usersRouter.get('/', async (req, res) => {
    const users = await getAllUsers();
    res.send({
        users
    });
})

module.exports = usersRouter;