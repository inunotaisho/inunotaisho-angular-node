import {Injectable} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
@Injectable()
export class AuthService {
    
     isLoggedIn = false;

     constructor(){
         const token = localStorage.getItem('token')
         if(token){
             this.isLoggedIn = true
         }
     }

    setIsLoggedIn = (token: string) => {
        this.isLoggedIn = true;
        localStorage.setItem('token', token);
    }
    getIsLoggedIn() {
        return this.isLoggedIn
    }
    logout(){
        localStorage.removeItem('token')
        this.isLoggedIn = false
    }
}