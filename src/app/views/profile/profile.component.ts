import {Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import {Profile} from './profile';


@Component({
    templateUrl:'./profile.component.html'
})

export class ProfileComponent implements OnInit{
    constructor() { }
    profile:Profile
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
}