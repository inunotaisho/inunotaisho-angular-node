import {Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { NgForm, FormsModule } from '@angular/forms'

@Component({
    templateUrl:'./reg.component.html'
})

export class RegComponent implements OnInit{
    constructor() { }

    onsubmit(register: NgForm){

    }

    resetForm(contactForm: NgForm) {
		
	}
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
}