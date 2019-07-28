import { Authentication } from './../../middleware/loggedInUser';
import { Router, Request, Response } from 'express';
import { Database } from '../../../models'

export class BlogDelete {
    constructor(
        private router: Router,
        private auth: Authentication,
        private db: Database
    ) {
        this.deleteSingleArticle();

    }

    /**
     * deleteSingleArticle
     */
    public deleteSingleArticle() {
        this.router.delete('/:id', (req, res, next) =>{
            this.db.Blog.remove({_id: req.params.id}, (err) => {
                console.log('deleeeeeee', err)
                if (err) {
                    // res.send('Error deleting file');
                } else {
                    // res.send('Successfully deleted the Shit');
                }
            });
        
        });
    }
}

