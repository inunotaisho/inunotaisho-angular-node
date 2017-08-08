import {Injectable} from '@angular/core';



@Injectable()

export class authService {
    isLoggedIn = () => {
        return false;
    }
    setIsLoggedIn = (value) => {
        this.isLoggedIn = value;
    }
    getIsLoggedIn = () => {
        return this.isLoggedIn();
    }
}