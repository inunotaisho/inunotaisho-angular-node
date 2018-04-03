let express = require('express'),
    cloudinary = require('cloudinary'),
    router = express.Router(),
    async = require('async');

let Blog = require('../../models').Blog,
    User = require('../../models').User;

router.post('/image', (req, res) => {
    console.log('shjkrgtruiwaiyrt', req.body)

    const images = req.body.post.split(" ").filter(i => /^src=/.test(i)).map(j => j.replace(/src="/g, '').replace(/"/g, ''));

    console.log('imagggggggssssss', images);
    async.eachSeries(images, (img, cb) => {
        cloudinary.v2.uploader.upload(img, (err, res) => {
            if (err) {
                console.log(`error uploading ${img} to cloudinary`, err);
                cb();
            } else {
                console.log(`uploaded ${img} to cloudinary`);
                cb();
            }
        })
    }, (err, resp) => {
        if (err) {
            res.send(err)
        } else {
            res.send(resp)
        }
    })
    // cloudinary.uploader.upload(images, 
    // )

});

module.exports = router;