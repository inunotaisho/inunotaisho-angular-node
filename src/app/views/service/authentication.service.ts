import {Injectable} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
@Injectable()
export class AuthService {
    
     isLoggedIn = true;

    setIsLoggedIn = (value: boolean) => {
        this.isLoggedIn = value;
    }
    getIsLoggedIn() {
        return this.isLoggedIn;
    }
}