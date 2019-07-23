import * as express from 'express';
import * as fs from 'fs';
import { promisify } from 'util';
import { Contact } from './contact';
import { BlogGet } from './blog/blogGet';
import { BlogPost } from './blog/blogPost';
import { BlogPut } from './blog/blogPut';
import { BlogDelete } from './blog/blogDelete';
import { UserReg } from './user/userReg';
import { Login } from './user/login';
import { Logout } from './user/logout';
import { FileUpload } from './blog/blogFile';



interface IROUTER {
    handler: express.Router;
    middleware: any[];
    path: string;
}

export const ROUTER: IROUTER[] = [{
    handler: Contact,
    middleware: [],
    path:'/contact'
},
{ 
    handler: BlogGet,
    middleware: [],
    path:'/blogGet'

},
{ 
    handler: BlogPost,
    middleware: [],
    path:'/blogPost'

},
{ 
    handler: BlogPut,
    middleware: [],
    path:'/blogPut'

},
{ 
    handler: BlogDelete,
    middleware: [],
    path:'/blogDelete'

},
{
    handler: FileUpload,
    middleware: [],
    path:'/logout'
}
{ 
    handler: UserReg,
    middleware:[],
    path:'/register'

},
{
    handler: Login,
    middleware: [],
    path:'/login'
},
{
    handler: Logout,
    middleware: [],
    path:'/logout'
}

]

export const ResumeRoute: express.Router = express.Router()
    .get("/pdf",(req, res) => {
        let file = fs.createReadStream(__dirname + '/assets/resumetemplate.pdf');
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'inline; filename=name.pdf');
        file.pipe(res);
    });
export const CertRoute: express.Router = express.Router()
    .get("/cert",(req, res) => {
        let file = fs.createReadStream(__dirname + '/assets/resumetemplate.pdf');
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'inline; filename=name.pdf');
        file.pipe(res);
    });