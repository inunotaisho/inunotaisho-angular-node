import { Router, Request, Response } from 'express';
import { User } from '../../../models/user';

export class UserReg {


    constructor(private router: Router) {
        this.registerRoute();

    }

    private registerRoute() {
        this.router.post('/register', (req: any, res: any) => {
            if (req.body.password !== req.body.passwordConfirm) {
                res.status(400).json({ message: 'Passwords must match' });
            } else {
                User.findOne({ username: req.body.username })
                    .then(function (existingUser) {
                        if (existingUser) {
                            res.status(400).json({ message: 'User already exists' });
                        } else {
                            const user = new User(req.body)
                            console.log(user);
                            this.user.setPassword(req.body.password)
                            this.user.save().then(function (newUser) {
                                res.status(200).json({ message: 'registration succesful' });
                            });
                        }
                    });
            }
        })
    }
}
