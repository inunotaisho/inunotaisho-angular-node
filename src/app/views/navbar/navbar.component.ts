import {Component, OnInit, OnDestroy} from '@angular/core';
import { NgIf } from '@angular/common';
import { Http } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';



import { HomeComponent } from '../home/home.component';
import { EdComponent } from '../education/ed.component';
import { PortfolioComponent }  from '../portfolio/portfolio.component';
import { BlogComponent } from '../blog/blog.component';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';
import { WriteComponent } from '../write/write.component';
import { ContactComponent } from '../contact/contact.component';
import { RegComponent } from '../reg/reg.component';

import { NavbarService } from './navbar.service';
import { AuthService } from '../service/authentication.service';

export function services(): any {

    return [
        NavbarService,
        AuthService
    ]
}

@Component({
    selector:'navbar',
    templateUrl:'./navbar.component.html',
    providers: services()
})

export class Navbar implements OnInit {
    logoutSubscription:Subscription;

    constructor(private http:Http, private authService: AuthService, public nav: NavbarService){


    }
    
    isUserLoggedIn = () =>{
        return this.authService.getIsLoggedIn();
    }

    logout = () => {
        this.logoutSubscription = this.http.get('/logout').subscribe((res) => {
            if(res.status) {
                this.authService.setIsLoggedIn(false);
            }
        })
       
    }
    ngOnDestroy() {
        this.logoutSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this.nav.show();
        throw new Error("Method not implemented.")
    }
    
}