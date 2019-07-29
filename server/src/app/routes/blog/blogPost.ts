import { Authentication } from '../../middleware/loggedInUser';
import { Router, Request, Response, NextFunction } from 'express';
import { Database } from 'server/src/models';

const router: Router = Router();

router.post('/', this.auth.loginRequired(), (req: Request, res: Response, next: NextFunction) => {

    this.db.Blog.create(req.body).then(post => {
        res.send(post);
    }).catch(err => {
        if (err) {
            throw err
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

export { router as BlogPost }