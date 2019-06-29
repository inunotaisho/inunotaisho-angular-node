const express = require('express'),
      cloudinary = require('cloudinary').v2,
      router = express.Router(),
      async = require('async');
      multer = require('multer');
    
      storage = multer.diskStorage({
          destination: function (req, file, cb) {
              cb(null, 'uploads/')
          },
          filename: function (req, file, cb) {
              console.log(file)
              cb(null, file.originalname)
          }
      });

      router.post('/upload', (req, res, next) => {
        const upload = multer({ storage }).single('name-of-input-key')
        upload(req, res, function(err) {
          if (err) {
            return res.send(err)
          }
          console.log('file uploaded to server');
          console.log(req.file);

          cloudinary.config({
            cloud_name: process.env.mycloudname,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET
          });

          const path = req.file.path;
          const uniqueFilename = new Date().toISOString();

          cloudinary.uploader.upload(
            path,
            { public_id: `blog/${uniqueFilename}`, tags: `blog` }, // directory and tags are optional
            function(err, image) {
              if (err) return res.send(err)
              console.log('file uploaded to Cloudinary')
              // remove file from server
              const fs = require('fs')
              fs.unlinkSync(path)
              // return image details
              res.json(image)
            }
          )
        })
      })

// router.post('/image', (req, res) => {
//     console.log('shjkrgtruiwaiyrt', req.body)

//     const images = req.body.post.split(" ").filter(i => /^src=/.test(i)).map(j => j.replace(/src="/g, '').replace(/"/g, ''));

//     console.log('imagggggggssssss', images);
//     async.eachSeries(images, (img, cb) => {
//         cloudinary.v2.uploader.upload(img, (err, res) => {
//             if (err) {
//                 console.log(`error uploading ${img} to cloudinary`, err);
//                 cb();
//             } else {
//                 console.log(`uploaded ${img} to cloudinary`);
//                 cb();
//             }
//         })
//     }, (err, resp) => {
//         if (err) {
//             res.send(err)
//         } else {
//             res.send(resp)
//         }
//     })
// });

module.exports = router;