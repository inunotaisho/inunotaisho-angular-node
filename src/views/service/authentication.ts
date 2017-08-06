import {Injectable} from '@angular/core';

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