import {Component, OnInit, OnDestroy} from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/throw';


import { HomeComponent } from '../home/home.component';
import { EdComponent } from '../education/ed.component';
import { PortfolioComponent }  from '../portfolio/portfolio.component';
import { BlogComponent } from '../blog/blog.component';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';
import { WriteComponent } from '../write/write.component';
import { ContactComponent } from '../contact/contact.component';

import { authService } from '../service/authentication';

@Component({
    selector:'navbar',
    templateUrl:'./navbar.component.html'
})

export class Navbar implements OnInit {
    constructor(private http:Http){

    }
    
    isUserLoggedIn = () =>{
        return authService.getIsLoggedIn();
    }

    logout = () => {
        this.http.get('/logout').then((res:Response) => {
            if(res.status) {
                authService.setIsLoggedIn();
            }
        })
       
    }
    ngOnDestroy() {
        this.logout.unsubscribe();
    }

    ngOnInit(): void {
        throw new Error("Method not implemented.")
    }
    
}