'use strict'


let express = require('express'),
    router = express.Router(),
    user = require('./users'),
    blog = require('./blog'),
    fs = require('fs'),
    path = require('path'),
    contact = require('./contact');


router.use('/users', user);
router.use('/contact', contact);
router.use('/blog', blog);

router.get("/pdf",(req, res) => {
    var file = fs.createReadStream(__dirname + '../../assets/resumetemplate.pdf');
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename=name.pdf');
    file.pipe(res);
});

router.get("/cert",(req, res) => {
    var file = fs.createReadStream(__dirname + '../../assets/resumetemplate.pdf');
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename=name.pdf');
    file.pipe(res);
});

router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '../../../../public/index.html'));
})

module.exports = router;