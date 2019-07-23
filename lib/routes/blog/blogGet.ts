import { Authentication } from './../../middleware/loggedInUser';
import { Router, Request, Response } from 'express';
import { Blog } from '../../../models/blog'
import { User } from '../../../models/user';

export class BlogGet {
    constructor(
        private router: Router,
        private auth: Authentication
    ) {
        this.getBlogListings();
        this.creatArticleForm();
        this.editArticleForm();
        this.getSingleArticle();
    }

    private getBlogListings(): void {
        this.router.get('/', (req, res, next) => {
            Blog.find().then(posts => {

            }).catch(err => {
                res.send(500);
                console.log(err)
            });
        });
    }

    private creatArticleForm(): void {
        this.router.get('/', (req, res, next) => {
            res.send('it works');
        })
    }

    /**
     * editArticleForm
     */
    public editArticleForm(): void {
        this.router.get("/:id/edit", (req, res, next) => {
            Blog.findById(req.params.id).then(post => {
                if (post) {

                } else {
                    res.send(404);
                }
            }).catch(err => {
                res.send(500);
                console.log(err);
            });
        });
    }

    /**
     * getSingleArticle
     */
    public getSingleArticle(): void {
        this.router.get("/:id", (req, res, next) => {
            Blog.findById(req.params.id).then(post => {
                if (post) {

                } else {
                    res.send(404);
                }
            }).catch(err => {
                res.send(500);
                console.log(err);
            });
        });
    }
}




