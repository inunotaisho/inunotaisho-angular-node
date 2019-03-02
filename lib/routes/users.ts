import { Router, Request, Response } from 'express';
import { User } from '../../models/user';

export class USERS {
    
    constructor(private router: Router){

    }

    routing(){
        let postRegister = this.router.post('/register', (req: any, res: any)=> {

        }) 
    }
}

export default USERS;
