import {Injectable} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';



@Injectable()

export class AuthService {


    isLoggedIn = () => {
        return false;
    }
    setIsLoggedIn = (value) => {
        this.isLoggedIn = true;
    }
    getIsLoggedIn() {
        return this.isLoggedIn();
    }
}