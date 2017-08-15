import {Component, OnInit, OnDestroy} from '@angular/core';
import { Http } from '@angular/http';
import { NgForm, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import {AuthService} from '../service/authentication.service';
import {Router} from '@angular/router';

@Component({
    templateUrl:'./login.component.html'
})

export class LoginComponent implements OnInit, OnDestroy{
    constructor(private http: Http, private authService:AuthService, private router:Router) { 


    }
    login: Subscription
    user: {
        username: string;
        password: string;
    }
    loginUser = () => {
        let login = this.http.post('/users/login', this.user).subscribe(data => {
            if(data.status === 200){
                console.log(data);
                this.authService.setIsLoggedIn(true);
                this.router.navigate(['/']);
            }
        }, err => { 
            console.log(err);
            console.log('user not logged in');
            this.authService.setIsLoggedIn(false);
        })
    }
    ngOnDestroy(){
        this.login.unsubscribe();
    }

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
}