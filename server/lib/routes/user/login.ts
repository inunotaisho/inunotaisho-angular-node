import { Router, Request, Response } from 'express';
import { User } from '../../../models/user';

export class Login {

    constructor(private router: Router) {
        this.loginRoute();
    }

    private loginRoute() {
        this.router.post('/login', function (req, res) {
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
    }
}
