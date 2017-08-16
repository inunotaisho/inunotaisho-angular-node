import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import { Http } from '@angular/http';
import { NgForm, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import {UserRegistration } from '../models/reg.model';


@Component({
    templateUrl:'./reg.component.html'
})

export class RegComponent implements OnDestroy{
    @Input() user: UserRegistration;
    
    constructor(private http:Http){
        this.user = new UserRegistration();
    }

    registeration: {
        
    }
    reg :Subscription

    // ngOnInit(): void {
    //     this.registeration = new FormGroup({
    //         'username': new FormControl(this.user.username, [
    //             Validators.required,
                
    //         ])
    //     })
    // }

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
        if(this.reg != undefined){
            this.reg.unsubscribe()
        }
    }
    
}