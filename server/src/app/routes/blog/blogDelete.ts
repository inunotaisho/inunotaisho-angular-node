import { Authentication } from './../../middleware/loggedInUser';
import { Router, Request, Response } from 'express';
import { Blog } from '../../../server/models/blog'
import { User } from '../../../server/models/user';

export class BlogDelete {
    constructor(
        private router: Router,
        private auth: Authentication
    ) {
        this.deleteSingleArticle();

    }

    /**
     * deleteSingleArticle
     */
    public deleteSingleArticle() {
        this.router.delete('/:id', (req, res, next) =>{
            Blog.remove({_id: req.params.id}, (err, response) => {
                console.log('deleeeeeee', err)
                console.log('22222deleeeeeee', response)
                if (err) {
                    res.send('Error deleting file');
                } else {
                    res.send('Successfully deleted the Shit');
                }
            });
        
        });
    }
}

