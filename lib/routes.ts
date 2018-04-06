import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { CONTACT } from './routes/contact';
import { BLOG } from './routes/blog';
import { USERS } from './routes/users';


interface IROUTER {
    path: string;
    middleware: any[];
    handler: express.Router;
}

export const ROUTER: IROUTER[] = [{
    handler: CONTACT,
    middleware: [],
    path:'/contact'
},
{ 
    handler: BLOG,
    middleware: [],
    path:'/blog'

},
{ 
    handler: USERS,
    middleware:[],
    path:'/users'

}]

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
    
export const IndexRoute: express.Router = express.Router()
    .get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname + './../src/index.html'));
    })