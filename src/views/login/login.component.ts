import {Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';

@Component({
    templateUrl:'./login.component.html'
})

export class LoginComponent implements OnInit{
    constructor() { 
    }

    loginUser = (http:Http) => {
        http.post('/users/login', {

        })
    }


    
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
}