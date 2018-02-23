import {Component, OnDestroy} from '@angular/core';
import { Http } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
//var writeComponent = require('./write.component.html');


@Component({
    templateUrl:'./write.component.html' //template: writeComponent
})

export class WriteComponent implements OnDestroy {
    blogPostSub: Subscription;
    subject= '';
    post='';
    editorOptions = {
        placeholderText: "Type your blog post here ",
        heightMin: 200
    };

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