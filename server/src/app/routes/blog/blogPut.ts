import { Router, Request, Response, NextFunction } from 'express';
import { Database } from 'server/src/models';

const router: Router = Router();

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
    this.db.Blog.findById(req.params.id).then(post => {
        if (post) {
            this.db.Blog.update({ _id: req.params.id }, req.body, (err, response) => {
                if (err) {
                    return res.send('Error updating Blog');
                } else {
                    return res.send('Blog updated successfully!!!');
                }
            });
        } else {
            res.send(404);
        }
    }).then(post => {
        res.send(post);
    }).then((err: any) => {
        if (err.name === "SequelizeValidationError") {
            // req.body.id = req.params.id;
            // const post = this.db.Blog.create(req.body);
            // res.send(post);

            const post = new this.db.Blog(req.body);
            post.id = req.params.id;
            post.save();
            res.send(post);
        } else {
            throw err
        }
    }).catch(err => {
        res.send(500);
        console.log(err);
    });
});

export { router as BlogPut }