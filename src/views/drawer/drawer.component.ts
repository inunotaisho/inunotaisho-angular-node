import {Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { RouterLink } from '@angular/router';
import {register, ui, controls, events, web} from 'platypus';
import {DrawerController} from 'platypusui';

import HomeComponent from '../home/home.component';
import EdComponent from '../education/ed.component';
import PortfolioComponent from '../portfolio/portfolio.component';
import BlogComponent from '../blog/blog.component';
import LoginComponent from '../login/login.component';
import ProfileComponent from '../profile/profile.component';
import WriteComponent from '../write/write.component';
import ContactComponent from '../contact/contact.component';


export default class DrawerComponent extends ui.TemplateControl implements OnInit{
    templateString: string = require('./drawer.component.html');

    constructor() {
        super();
     }

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
}
register.control('drawer', DrawerComponent, [], true);