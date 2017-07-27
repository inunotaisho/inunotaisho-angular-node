import {Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { RouterLink } from '@angular/router';
import {register, ui} from 'platypus';
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