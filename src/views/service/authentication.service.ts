import {Injectable} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';



@Injectable()

export class AuthService {
        isLoggedIn = false;

    setIsLoggedIn = (value: boolean) => {
        this.isLoggedIn = value;
    }
    getIsLoggedIn() {
        return this.isLoggedIn;
    }
}