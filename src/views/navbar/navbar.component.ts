import {Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import {DrawerController} from 'platypusui';

import DrawerComponent from '../drawer/drawer.component';

import HomeComponent from '../home/home.component';
import EdComponent from '../education/ed.component';
import PortfolioComponent from '../portfolio/portfolio.component';
import BlogComponent from '../blog/blog.component';
import LoginComponent from '../login/login.component';
import ProfileComponent from '../profile/profile.component';
import WriteComponent from '../write/write.component';
import ContactComponent from '../contact/contact.component';

@Component({
    selector:'navbar',
    templateUrl:'./navbar.component.html'
})

export default class Navbar implements OnInit{
    constructor() { }

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
}