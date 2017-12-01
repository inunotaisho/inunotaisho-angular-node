import { CollapseModule, TooltipModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { Navbar} from './views/navbar/navbar.component';

import { HomeComponent } from './views/home/home.component';
import { EdComponent } from './views/education/ed.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { BlogComponent } from './views/blog/blog.component';
import { BlogPostComponent } from './views/blogpost/blogpost.component';
import { LoginComponent }from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { WriteComponent } from './views/write/write.component';
import { ContactComponent } from './views/contact/contact.component';
import { RegComponent } from './views/reg/reg.component';
import portImgContainer from './views/portfolio/images/portfolio.image.component';

import { AuthService } from './views/service/authentication.service';

export const routes: Routes = [
 {path:'', pathMatch:'full', component:HomeComponent},
 {path:'education', component:EdComponent},
 {path:'portfolio', component: PortfolioComponent},
 {path:'blog', component: BlogComponent},
 {path:'blogPost', component: BlogPostComponent},
 {path:'login', component: LoginComponent},
 {path:'profile', component: ProfileComponent},
 {path:'write', component: WriteComponent},
 {path:'contact', component: ContactComponent},
 {path:'reg', component: RegComponent}
]

export function declarations(): any {
    return [
        AppComponent,
        HomeComponent,
        EdComponent,
        PortfolioComponent,
        portImgContainer,
        BlogComponent,
        BlogPostComponent,
        LoginComponent,
        ProfileComponent,
        WriteComponent,
        ContactComponent,
        RegComponent,
        Navbar
    ]
}

@NgModule({
   declarations: [ 
       AppComponent,
       declarations()
   ],      
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot(routes),
      TooltipModule.forRoot(),
      CollapseModule
   ],
   providers: [
       AuthService
   ],
   bootstrap: [AppComponent]
})
export class AppModule { 
  
}