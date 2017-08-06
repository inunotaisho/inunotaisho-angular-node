import {Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { ui, DrawerController } from 'platnav';

import Drawer from '../drawer/drawer.component';

import HomeComponent from '../home/home.component';
import EdComponent from '../education/ed.component';
import PortfolioComponent from '../portfolio/portfolio.component';
import BlogComponent from '../blog/blog.component';
import LoginComponent from '../login/login.component';
import ProfileComponent from '../profile/profile.component';
import WriteComponent from '../write/write.component';
import ContactComponent from '../contact/contact.component';

import { authService } from '../service/authentication';

@Component({
    selector:'navbar',
    templateUrl:'./navbar.component.html'
})

export default class Navbar extends ui.angularControl implements OnInit {
    drawerController:ui.angularControl.INamedElement<HTMLDivElement, DrawerController>;
    constructor() { 
        super()
    }

    // isUserLoggedIn = () =>{
    //     return authService.getIsLoggedIn();
    // }

    // logout = (http:Http) => {
    //     http.get('/logout').subscribe((res:Response) => {
    //         if(res.status) {
    //             authService.setIsLoggedIn();
    //         }
    //     })
    // }

    ngOnInit(): void {
        throw new Error("Method not implemented.")
    }
    
}