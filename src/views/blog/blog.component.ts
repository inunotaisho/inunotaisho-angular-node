import {Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';

@Component({
    templateUrl:'./blog.component.html'
})
export default class BlogComponent implements OnInit{
    constructor() { }

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
}