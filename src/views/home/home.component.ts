import {Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';

@Component({
    templateUrl:'./home.component.html'
})

export default class HomeComponent implements OnInit{
    constructor() { }

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
}