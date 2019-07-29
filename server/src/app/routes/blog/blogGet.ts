import { Authentication } from '../../middleware/loggedInUser';
import { Router, Request, Response, NextFunction } from 'express';
import { Database } from 'server/src/models';

const router: Router = Router();



router.get('/listings', (req: Request, res: Response, next: NextFunction) => {
    this.db.Blog.find().then(posts => {
    }).catch(err => {
        res.send(500);
        console.log(err)
    });
});


router.get('/new', (req: Request, res: Response, next: NextFunction) => {
    res.send('it works');
})

/**
 * editArticleForm
 */
router.get("/:id/edit", (req, res, next) => {
    this.db.Blog.findById(req.params.id).then(post => {
        if (post) {

        } else {
            res.send(404);
        }
    }).catch(err => {
        res.send(500);
        console.log(err);
    });
});


/**
 * getSingleArticle
 */
router.get("/:id", (req, res, next) => {
    this.db.Blog.findById(req.params.id).then(post => {
        if (post) {

        } else {
            res.send(404);
        }
    }).catch(err => {
        res.send(500);
        console.log(err);
    });
});

export {router as BlogGet};




