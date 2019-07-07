import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/authservice/authentication.service';
import { MediaToolTipComponent } from './media-tool-tip/media-tool-tip.component';
import { ListenerDefaults, Combo, Listener } from 'keypress.js';
import { json } from 'body-parser';

@Component({
    selector: 'sg-editor',
    templateUrl: './editor.component.html'
})

export default class EditorComponent implements OnInit {


    title:string;
    author: string;
    content: string;
    published: Date;


    constructor(
        private auth: AuthService,
        private http: HttpClient
    ) {
    }

    blogs = []

    ngOnInit(){

    }

    addEntry() {
        const entryData = {
            title: this.title,
            author: this.auth.getUsername(),
            // authorId: this.auth
            content: this.content,
            published: new Date()
        }

    }
}