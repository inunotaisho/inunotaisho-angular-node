import { Router, Request, Response } from 'express';
import { Blog } from '../../../models/blog'
import { User } from '../../../models/user';

export class BlogPut {
    constructor(
        private router: Router
    ) {
        this.updatePut();

    }

    public updatePut() {
        this.router.put('/:id', (req, res, next) => {
            Blog.findById(req.params.id).then(post => {
                if (post) {
                    Blog.update({ _id: req.params.id }, req.body, (err, response) => {
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
                res.redirect("", + post.id);
            }).catch(err => {
                if (err.name === "SequelizeValidationError") {
                    let post = Blog.build(req.body);
                    post.id = req.params.id;
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