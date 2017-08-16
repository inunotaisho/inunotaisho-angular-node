import {Component, OnDestroy} from '@angular/core';
import { Http } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';



@Component({
    templateUrl:'./write.component.html'
})

export class WriteComponent implements OnDestroy {
    blogPostSub: Subscription;
    subject= '';
    post='';
    constructor(private http:Http) { }

    blogPost(){
        let blogPostSub = this.http.post('/blog',{
                            subject: this.subject,
                            post: this.post
                        }).subscribe(res => {
                            console.log(res)
                        }, err => {
                            console.log(err);
                            console.log('article did not post');
                        })
    }

    ngOnDestroy(){
        if(this.blogPostSub != undefined){
            this.blogPostSub.unsubscribe();
        }
    }
    
}