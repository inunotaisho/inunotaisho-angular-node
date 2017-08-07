import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


import { Navbar } from '../navbar/navbar.component';

import { HomeComponent } from '../home/home.component';
import { EdComponent } from '../education/ed.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { BlogComponent } from '../blog/blog.component';
import { LoginComponent }from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';
import { WriteComponent } from '../write/write.component';
import { ContactComponent } from '../contact/contact.component';
import { RegComponent } from '../reg/reg.component';


const routes: Routes = [
 {path:'', pathMatch:'full', component:HomeComponent},
 {path:'education', component:EdComponent},
 {path:'portfolio', component: PortfolioComponent},
 {path:'blog', component:BlogComponent},
 {path:'login', component: LoginComponent},
 {path:'profile', component: ProfileComponent},
 {path:'write', component: WriteComponent},
 {path:'contact', component: ContactComponent},
 {path:'reg', component: RegComponent}
]

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      EdComponent,
      PortfolioComponent,
      BlogComponent,
      LoginComponent,
      ProfileComponent,
      WriteComponent,
      ContactComponent,
      RegComponent,
      Navbar
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot(routes)
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { 
  
}