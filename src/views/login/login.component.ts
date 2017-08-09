import {Component, OnInit, OnDestroy} from '@angular/core';
import { Http } from '@angular/http';
import {Location} from '@angular/common';
import { NgForm, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import {AuthService} from '../service/authentication.service';

@Component({
    templateUrl:'./login.component.html'
})

export class LoginComponent implements OnInit, OnDestroy{
    constructor(private http: Http) { 
    }
    authService:AuthService
    login: Subscription;
    location: Location;
    user: {
        username: string;
        password: string;
    }
    loginUser = (user:NgForm) => {
        let login = this.http.post('/users/login', user).subscribe(data => {
            if(data.status === 200){
                console.log(data);
                this.authService.setIsLoggedIn();
                location.pathname('/');
            }
        })
    }
    ngOnDestroy(){
        this.login.unsubscribe();
    }

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
}