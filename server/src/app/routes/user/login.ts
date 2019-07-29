import { Router, Request, Response } from 'express';
import { User } from '../../../models/user';

const router: Router = Router();

        router.post('/login', function (req: Request, res: Response) {
            console.log('Register');
            User.findOne({ username: req.body.username })
                .then(function (user) {
                    if (!user) {
                        return res.status(401).json({ error: 'User does not exist' });
                    }

                    if (!this.user.comparePassword(req.body.password)) {
                        return res.status(401).json({ error: 'Password incorrect' });
                    }
                    else {
                        res.json({ success: true, token: this.user.generateJWT(), username: this.user.username });
                    }
                });

        })


export { router as Login }
