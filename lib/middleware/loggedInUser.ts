const { User } = require('../../models/').User;

export const authentication = (req: any, res: any, next:any ) => {
    res.locals.isAuthenticated = () => {
        return !! req.user;
    }
    if(req.session.user_id){
        User.findbyId(req.session.user_id)
        .then( user =>{
            req.user = user;
            res.locals.user = user;
            
        })
    }
}