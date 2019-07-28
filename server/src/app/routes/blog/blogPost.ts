import { Authentication } from '../../middleware/loggedInUser';
import { Router, Request, Response } from 'express';
import { Database } from 'server/src/models';


export class BlogPost {
    constructor(
        private router: Router,
        private auth: Authentication,
        private db: Database
    ) {
        this.postCreateArticle();
        
    }

    /**
     * postCreateArticle
     */
    public postCreateArticle() {
        this.router.post('/', this.auth.loginRequired(), (req, res, next) => {
    
            this. db.Blog.create(req.body).then(post => {
                res.send(post);
            }).catch(err => {
                if(err){
                    throw err
                }
            }).catch(err => {
                res.status(500).send(err);
            });
        });
    }

}