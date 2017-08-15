import {Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';

import { Navbar } from '../navbar/navbar.component';

@Component({
    templateUrl:'./blog.component.html'
})
export class BlogComponent implements OnInit{
    items: {};
    constructor(private http:Http) {

     }

     getBlogItems(){
        this.http.get('/blog').subscribe(res => {
            console.log(res)
        }, err => {
            console.log(err);
        })
     }
    ngOnInit(): void {
        this.getBlogItems();
    }
    
}