let express = require('express'),
    cloudinary = require('cloudinary'),
    router = express.Router();

let Blog = require('../../models').Blog,
    User = require('../../models').User;

router.post('/image', (req, res) => {
    console.log('isnide ddsdsd', req.body)
    const imgUrl = req.body.file;
    
    cloudinary.uploader.upload(imgUrl,
        function(result) { 
        console.log(result) 
        });
});

module.exports = router;