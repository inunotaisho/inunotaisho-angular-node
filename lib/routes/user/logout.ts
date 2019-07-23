import { Router, Request, Response } from 'express';
import { User } from '../../../models/user';

export class Logout {

    constructor(private router: Router) {
        this.logoutRoute();
    }

    private logoutRoute() {
        this.router.get('/logout', function (req, res) {
            req.session.destroy(function () {
              res.status(200).json({ message: 'logout successful' });
            });
          });
    }
}