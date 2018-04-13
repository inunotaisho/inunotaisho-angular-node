const jwt = require('express-jwt');
let User = require('../../models').User;

const loginRequired = jwt({
    secret: process.env.SECRET,
    credentialsRequired: true,
    getToken: function fromHeaderOrQuerystring (req) {
      if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
          return req.headers.authorization.split(' ')[1];
      } else if (req.query && req.query.token) {
        return req.query.token;
      }
      return null;
    }
});

module.exports = loginRequired;




// module.exports = (req,res, next) => {
//     res.locals.isAuthenticated = () => {
//         return !!req.user;
//     };
//     if(req.session.user_id) {
//         User.findbyId(req.session.user_id)
//             .then((user) => {
//                 req.user = user;
//                 res.locals.user = user;
//                 next();
//             })
//     } else {
//         next();
//     }
// };