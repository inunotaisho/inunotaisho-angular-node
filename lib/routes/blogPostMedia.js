const express = require('express'),
      cloudinary = require('cloudinary').v2,
      router = express.Router();
      // async = require('async');


      cloudinary.config({
        cloud_name: process.env.mycloudname,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET
      });
      

      /*first route {multiple image upload}*/
      router.post('/upload', async (req, res) => {
        /* we would receive a request of file paths as array */
        let filePaths = req.body.filePaths;

        let multipleUpload = new Promise(async (resolve, reject) => {
          let upload_len = filePaths.length,
              upload_res = new Array();

              for(let i = 0; i <=upload_len + 1; i++) 
              {
                let filePath = filePaths[i]
                await cloudinary.v2.upload(filePath, (error, result) => {
                  if(upload_res.length === upload_len)
                  {
                     /* resolve promise after upload is complete */
                     resolve(upload_res);
                  } else if (result) 
                  {
                    /*push public_ids in an array */
                    upload_res.push(result.public_id);
                  } else if (error) 
                  {
                    console.log(error);
                    reject(error);
                  }
                })
              }
        })
        .then(result => result)
        .catch(error => error)

        /*waits until promise is resolved before sending back response to user*/

        let upload = await multipleUpload;
        res.json('response', upload)
      })

      // multer = require('multer');
    
      // storage = multer.diskStorage({
      //     destination: function (req, file, cb) {
      //         cb(null, 'uploads/')
      //     },
      //     filename: function (req, file, cb) {
      //         console.log(file)
      //         cb(null, file.originalname)
      //     }
      // });

      // router.post('/upload', (req, res, next) => {
      //   const upload = multer({ storage }).single('name-of-input-key')
      //   upload(req, res, function(err) {
      //     if (err) {
      //       return res.send(err)
      //     }
      //     console.log('file uploaded to server');
      //     console.log(req.file);

      //     cloudinary.config({
      //       cloud_name: process.env.mycloudname,
      //       api_key: process.env.API_KEY,
      //       api_secret: process.env.API_SECRET
      //     });

      //     const path = req.file.path;
      //     const uniqueFilename = new Date().toISOString();

      //     cloudinary.uploader.upload(
      //       path,
      //       { public_id: `blog/${uniqueFilename}`, tags: `blog` }, // directory and tags are optional
      //       function(err, image) {
      //         if (err) return res.send(err)
      //         console.log('file uploaded to Cloudinary')
      //         // remove file from server
      //         const fs = require('fs')
      //         fs.unlinkSync(path)
      //         // return image details
      //         res.json(image)
      //       }
      //     )
      //   })
      // })

module.exports = router;