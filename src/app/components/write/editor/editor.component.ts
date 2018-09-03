import { Component, OnInit, Input, Output, EventEmitter, HostListener, NgZone } from '@angular/core';
import { AppSettings } from './../../../common/config';

@Component({
    selector: 'sg-editor',
    templateUrl: './editor.component.html'
})

export default class EditorComponent implements OnInit {

    constructor() {}

    ngOnInit() {

    }
        // When the user clicks on button, it opens and close the tooltip menu
        @HostListener('window: toolTipMenu', ['$event'])
        toolTip($event){

        }

        toolTipMenu($event){
            if () {
                document.getElementById("tooltipbutton").classList.add('is-scaled');
            } else {
                document.getElementById("tooltipbutton").classList.remove('is-scaled');
            }
        }

        textAdded($event){
            if () {
                document.getElementById("tooltipbutton").classList.remove('is-active');
            } else {
                document.getElementById("tooltipbutton").classList.add('is-active');
            }
        }

    }