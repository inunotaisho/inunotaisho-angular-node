import { Component, OnInit, Input, Output, EventEmitter, HostListener, NgZone } from '@angular/core';
import { AppSettings } from './../../../common/config';
import { AuthService } from './../../../services/authservice/authentication.service';
import { ListenerDefaults, Combo, Listener } from 'keypress.js';
import { json } from 'body-parser';

@Component({
    selector: 'sg-editor',
    templateUrl: './editor.component.html'
})

export default class EditorComponent implements OnInit {
    content: string
    image: string
    title:string

    constructor(
        private auth: AuthService
    ) { }

    blogs = []

    ngOnInit() {

    }

    addEntry() {
        const entryData = {
            title: this.title,
            author: this.auth.getUsername(),
            // authorId: this.auth
            content: this.content,
            image: this.image || null,
            published: new Date()
        }

    }
    // When the user clicks on button, it opens and close the tooltip menu
    // @HostListener('window: toolTipMenu', ['$event'])
    // toolTip($event){

    // }

    // toolTipMenu($event){
    //     if () {
    //         document.getElementById("tooltipbutton").classList.add('is-scaled');
    //     } else {
    //         document.getElementById("tooltipbutton").classList.remove('is-scaled');
    //     }
    // }

    // textAdded($event){
    //     if () {
    //         document.getElementById("tooltipbutton").classList.remove('is-active');
    //     } else {
    //         document.getElementById("tooltipbutton").classList.add('is-active');
    //     }
    // }

}