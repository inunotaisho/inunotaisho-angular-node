import {Component, OnInit, OnDestroy} from '@angular/core';
import { Http } from '@angular/http';
import { NgForm, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Navbar } from '../navbar/navbar.component';

@Component({
    templateUrl:'./reg.component.html'
})

export class RegComponent implements OnInit, OnDestroy{

    constructor(private http:Http){
    }

    registeration: {
        
    }
    reg :Subscription
    user:{
        username: string;
        email: string; 
        password: string;
        password_confirm:string;
        firstName: string,
        lastName: string,
    }

    onSubmit(form:NgForm){
        this.reg = this.http.post('/users/register', this.user).subscribe((res) => {
            if(res.status === 200) {
                console.log(res);
                form.reset();
            } else {
                console.log(res);
            }
        })

    }
    ngOnDestroy(){
            this.reg.unsubscribe()
    }

    
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
}