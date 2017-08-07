import {Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import {NgForm} from '@angular/forms';

@Component({
    templateUrl:'./contact.component.html'
})

export class ContactComponent implements OnInit{
    constructor() { }

    onSubmit(contactForm: NgForm){

    }

    resetForm(contactForm: NgForm){
        
    }


    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
}