import {Component, OnInit, OnDestroy} from '@angular/core';
import { Http } from '@angular/http';



@Component({
    templateUrl:'./write.component.html'
})

export class WriteComponent implements OnInit{

    subject= '';
    post='';
    constructor(private http:Http) { }

    blogPost(){
        this.http.post('/blog',{
            subject: this.subject,
            post: this.post
        }).subscribe(res => {
            console.log(res)
        }, err => {
            console.log(err);
            console.log('article did not post');
        })
    }
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
}