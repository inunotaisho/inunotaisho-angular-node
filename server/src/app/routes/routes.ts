import * as express from 'express';
import * as fs from 'fs';
import { promisify } from 'util';
import { auth } from './../middleware/loggedInUser';
import { Contact } from './contact';
import {
    BlogGet,
    BlogPost,
    BlogPut,
    BlogDelete
} from './blog';
import { UserReg } from './user/userReg';
import { Login } from './user/login';
import { Logout } from './user/logout';
import { FileUpload } from './blog/blogFile';



interface IROUTER {
    path: string;
    middleware: any[];
    handler: express.Router;
}

export const ROUTER: IROUTER[] = [
    {
        handler: Contact,
        middleware: [],
        path: '/contact',
    },
    {
        handler: BlogGet,
        middleware: [],
        path: '/blogGet',
    },
    {
        handler: BlogPost,
        middleware: [],
        path: '/blogPost',
    },
    {
        handler: BlogPut,
        middleware: [],
        path: '/blogPut',
    },
    {
        handler: BlogDelete,
        middleware: [],
        path: '/blogDelete',
    },
    {
        handler: FileUpload,
        middleware: [],
        path: '/fileUpload',
    },
    {
        handler: UserReg,
        middleware: [],
        path: '/register',
    },
    {
        handler: Login,
        middleware: [auth],
        path: '/login',
    },
    {
        handler: Logout,
        middleware: [],
        path: '/logout',
    },
];

export const ResumeRoute: express.Router = express.Router()
    .get("/pdf", (req, res) => {
        let file = fs.createReadStream(__dirname + '/assets/resumetemplate.pdf');
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'inline; filename=name.pdf');
        file.pipe(res);
    });
export const CertRoute: express.Router = express.Router()
    .get("/cert", (req, res) => {
        let file = fs.createReadStream(__dirname + '/assets/resumetemplate.pdf');
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'inline; filename=name.pdf');
        file.pipe(res);
    });