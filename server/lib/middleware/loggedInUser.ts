import * as jwt from 'express-jwt'
import { User } from '../../models/user';

export class Authentication {


    constructor() {
        this.auth();
    }

    public auth() {

        return jwt({
            secret: process.env.SECRET,
            credentialsRequired: true,
            getToken: function fromHeaderOrQuerystring(req) {
                if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
                    return req.headers.authorization.split(' ')[1];
                } else if (req.query && req.query.token) {
                    return req.query.token;
                }
                return null;
            }
        });
    }
}
