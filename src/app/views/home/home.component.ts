import {Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';

import { Navbar } from '../navbar/navbar.component';

@Component({
    templateUrl:'./home.component.html'
})

export class HomeComponent implements OnInit{
    constructor() { }

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
}