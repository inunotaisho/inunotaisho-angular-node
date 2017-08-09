import {Component, OnInit, OnDestroy} from '@angular/core';
import { Http } from '@angular/http';
import { NgForm, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

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

    onSubmit(user:NgForm){
        this.reg = this.http.post('/users/register', user).subscribe((res) => {
            if(res.status === 200) {
                console.log(res);
            } else {
                console.log(res);
            }
        })
    }
    ngOnDestroy(){
            this.reg.unsubscribe()
    }

    resetForm(registeration: NgForm) {
		
	}
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
}