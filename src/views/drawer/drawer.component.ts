import {Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import {register, ui, controls, events, web} from 'platypus';
import {DrawerController} from 'platypusui';

@Component({
    selector:'app-drawer',
    templateUrl:'./drawer.component.html'
})

export default class DrawerComponent extends ui.TemplateControl implements OnInit{
    constructor() {
        super();
     }

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
}
register.control('drawer', DrawerComponent, [], true);