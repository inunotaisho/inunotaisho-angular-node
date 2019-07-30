import * as jwt from 'express-jwt';
import { Request } from 'express';

class Authentication {


    static loginRequired() {

        return jwt({
            secret: process.env.SECRET,
            credentialsRequired: true,
            getToken: function fromHeaderOrQuerystring(req: Request) {
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

export { Authentication as auth }