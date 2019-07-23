import { Authentication } from './../../middleware/loggedInUser';
import { Router, Request, Response } from 'express';
import { Blog } from '../../../models/blog'
import { User } from '../../../models/user';

export class BlogPost {
    constructor(
        private router: Router,
        private auth: Authentication
    ) {
        this.postCreateArticle();
        
    }

    /**
     * postCreateArticle
     */
    public postCreateArticle() {
        this.router.post('/', this.auth(), (req, res, next) => {
    
            Blog.create(req.body).then(post => {
                res.send(post);
            }).catch(err => {
                if(err){
                    throw err
                }
            }).catch(err => {
                res.send(500);
            });
        });
    }

}