const express = require ('express');
const tagsRouter = express.Router();
const { getAllTags, getPostsByTagName}= require('../db')


tagsRouter.use((req, res, next )=> {
    console.log ('request to /tags ')
    next();
})
// const {getAllTags}= require ('../db');

tagsRouter.get('/', async (req, res, next)=> {
const tags = await getAllTags();

res.send({
    tags
    })
  
});
tagsRouter.get('/:tagName/posts', async (req, res, next) => {
    // read the tagname from the params
    const tagname = req.params.tagName
    try {
      // use our method to get posts by tag name from the db
      // send out an object to the client { posts: // the posts }

      const posts = await getPostsByTagName(tagname);
        res.send({ posts })

    } catch ({ name, message }) {
      // forward the name and message to the error handler
      next({ name, message });
    }
  });

 module.exports= tagsRouter;

