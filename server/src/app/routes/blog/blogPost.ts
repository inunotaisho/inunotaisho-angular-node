import { auth } from '../../middleware/loggedInUser';
import { Router, Request, Response, NextFunction } from 'express';

const router: Router = Router();

/**
 * POST create article.
 */

router.post('/', auth.loginRequired(), (req: Request, res: Response, next: NextFunction) => {

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