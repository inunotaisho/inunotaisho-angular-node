import { Authentication } from './../../middleware/loggedInUser';
import { Router, Request, Response, NextFunction } from 'express';
import * as db from '../../../models';

const router: Router = Router();

this.router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
    this.db.Blog.remove({ _id: req.params.id }, (err) => {
        console.log('deleeeeeee', err)
        if (err) {
            // res.send('Error deleting file');
        } else {
            // res.send('Successfully deleted the Shit');
        }
    });

});

export { router as BlogDelete }

