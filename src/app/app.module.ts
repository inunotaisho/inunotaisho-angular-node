import { CollapseModule, TooltipModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable} from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, CanActivate } from '@angular/router';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { Navbar} from './components/navbar/navbar.component';
import { routes } from "./routes/routes.module";
import { HomeComponent } from './components/home/home.component';
import { EdComponent } from './components/education/ed.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogPostComponent } from './components/blogpost/blogpost.component';
import { LoginComponent }from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WriteComponent } from './components/write/write.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegComponent } from './components/reg/reg.component';
import { ErrorComponent } from './components/errors/error.component';
import portImgContainer from './components/portfolio/portfolio-images/portfolio.image.component';
import FroalaEditor from './components/write/froala-editor/froala.component';

import { AuthService } from '../app/services/authservice/authentication.service';
import { AuthGuard } from './common/authguard/authguard.guard';




export function declarations(): any {
    return [
        AppComponent,
        BlogComponent,
        BlogPostComponent,
        ContactComponent,
        EdComponent,
        FroalaEditor,
        HomeComponent,
        LoginComponent,
        Navbar,
        ProfileComponent,
        PortfolioComponent,
        portImgContainer,
        RegComponent,
        WriteComponent,
        ErrorComponent
    ]
}

@NgModule({
   declarations: [ 
       AppComponent,
       declarations()
   ],      
   imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      TooltipModule.forRoot(),
      FormsModule,
      HttpClientModule,
      CollapseModule,
      FroalaEditorModule.forRoot(),
      FroalaViewModule.forRoot()
   ],
   providers: [
       AuthService,
       AuthGuard
   ],
   bootstrap: [AppComponent]
})
export class AppModule { 
  
}

