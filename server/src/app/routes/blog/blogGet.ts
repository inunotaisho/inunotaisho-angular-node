import { auth } from '../../middleware/loggedInUser';
import { Router, Request, Response, NextFunction } from 'express';
import { db } from '../../../models';

const router: Router = Router();


/**
 * GET articles listing.
 */

router.get('/listings', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const posts = await db.Blog.find().lean();
        res.status(200).send(posts);
    }
    catch (error) {
        res.status(500).send(error.message);   
    }
});

/**
 * Create a new article form.
 */
router.get('/new', (req: Request, res: Response, next: NextFunction) => {
    res.send('it works');
});

/**
 * editArticleForm
 */
router.get('/:id/edit', (req, res, next) => {
    db.Blog.findById(req.params.id).then(post => {
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
router.get('/:id', (req, res, next) => {
    db.Blog.findById(req.params.id).then(post => {
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
