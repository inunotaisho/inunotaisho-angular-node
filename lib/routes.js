'use strict'


let express = require('express'),
    router = express.Router(),
    user = require('./routes/users'),
    blog = require('./routes/blog'),
    fs = require('fs');
    /*contact = require('./routes/contact');*/


router.use('/users', user);
/*router.use('/contact', contact);*/


router.get("/pdf",(req, res) => {
    var file = fs.createReadStream(__dirname + '/assets/Ethan-Fairweather-Resume-2.0-with-References.pdf');
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename=name.pdf');
    file.pipe(res);
});

router.get("*",(req, res) => {
    res.render('index');
});


/*router.get("/:template", (req, res)=> {
    res.render(`${req.params.template}`);
})*/



module.exports = router;