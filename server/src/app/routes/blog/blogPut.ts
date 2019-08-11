import { Router, Request, Response, NextFunction } from 'express';
import { db } from '../../../models';

const router: Router = Router();

/**
 * PUT update article.
 */

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
    db.Blog.findById(req.params.id).then(post => {
        if (post) {
            db.Blog.update({ _id: req.params.id }, req.body, (err: any, res: Response) => {
                if (err) {
                    return res.status(500).send('Error updating Blog').send(err);
                } else {
                    return res.status(200).send('Blog updated successfully!!!');
                }
            });
        } else {
            res.send(404).send('Not Found');
        }
    }).then((post) => {
        res.send(post);
    }).then((err: any) => {
        if (err.name === 'SequelizeValidationError') {
            // req.body.id = req.params.id;
            // const post = db.Blog.create(req.body);
            // res.send(post);

            const post = new db.Blog(req.body);
            post.id = req.params.id;
            post.save();
            res.send(post);
        } else {
            throw err;
        }
    }).catch(err => {
        res.send(500);
        console.log(err);
    });
});

export { router as BlogPut };
