import {Component, OnInit} from '@angular/core';
import { NgIf } from '@angular/common';
import { Http } from '@angular/http';


@Component({
    templateUrl:'./blogpost.component.html'
})
export class BlogPostComponent implements OnInit{
    items: {};
    constructor(private http:Http) {

     }

     getPostItems(){

     }
    ngOnInit(): void {
        this.getPostItems();
    }
    
}