import { Router, Request, Response } from 'express';
import { Database } from 'server/src/models';

export class BlogPut {
    constructor(
        private router: Router,
        private db: Database
    ) {
        this.updatePut();

    }

    public updatePut() {
        this.router.put('/:id', (req, res, next) => {
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
    }
}