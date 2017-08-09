import {Component, OnInit, OnDestroy} from '@angular/core';
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

import { AuthService } from '../service/authentication.service';

@Component({
    selector:'navbar',
    templateUrl:'./navbar.component.html',
    providers: [AuthService]
})

export class Navbar implements OnInit {
    logoutSubscription:Subscription;

    constructor(private http:Http, private authService: AuthService){


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
        throw new Error("Method not implemented.")
    }
    
}