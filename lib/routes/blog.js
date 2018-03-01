const express = require('express'),
      cloudinary = require('cloudinary');

let router = express.Router(),
    img = require('./blogPostImg'),
    file = require('./blogPostFile'),
    vid = require('./blogPostVid'),
    Blog = require('../../models').Blog,
    User = require('../../models').User;

    router.use('/blogPostFile',file);
    router.use('/blogPostImg', img);
    router.use('/blogPostVid', vid);


    
router.post('/upload', (req, res) => {


});
/* GET blog listing. */
router.get('/', (req, res, next) => {
    Blog.findAll().then(posts => {
        console.log('our posts', posts);
        res.send(posts);
    }).catch(err =>{
        console.log('our err', err);
        res.send(500, err);
    });
});

/* POST create article. */
router.post('/', (req, res, next) => {
    console.log('body pppp', req.body);
    
    Blog.create(req.body).then(post => {
        console.log('our new posts', post);
        res.send(post);
    }).catch(err => {
        console.log('our err', err);
        if(err.name === "SequelizeValidationError"){
        } else {
            throw err
        }
    }).catch(err => {
        console.log('our err2', err);
        res.send(500, err);
    });
});

/* GET individual article. */
router.get("/:id", (req, res, next)=> {
    Blog.findById(req.params.id).then(post => {
        if(post) {

        } else {
            res.send(404);
        }
    }).catch(err => {
        res.send(500, err);
    });
});

/* PUT update article. */
router.put('/:id', (req, res, next) => {
    Blog.findById(req.params.id).then( post => {
        if(post){
            return Blog.update(req.body);
        } else {
            res.send(404);
        }
    }).then( post => {
        res.redirect("", + post.id);
    }).catch( err => {
        if(err.name === "SequelizeValidationError"){
            let post = Blog.build(req.body);
            post.id = req.params.id;
        } else {
            throw err
        }
    }).catch( err => {
        res.send(500, err);
    });
});

/* DELETE individual article. */
router.delete('/:id', (req, res, next) =>{
    Blog.findById(req.params.id).then(post =>{
        if(post){
            return post.destroy();
        } else {
            res.send(404);
        }
    }).then(() => {
        res.redirect('/');
    }).catch(err => {
        res.send(500, err);
    });
});


module.exports = router;