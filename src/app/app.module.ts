import { CollapseModule, TooltipModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { Navbar} from './views/navbar/navbar.component';

import portImgContainer from './views/portfolio/images/portfolio.image.component';

import { AuthService } from './views/service/authentication.service';

import { routes } from './app.route';

export function declarations(): any {
    return [
        AppComponent,
        routes,
        Navbar,
        portImgContainer
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
      CollapseModule,
      FroalaEditorModule.forRoot(),
      FroalaViewModule.forRoot()
   ],
   providers: [
       AuthService
   ],
   bootstrap: [AppComponent]
})
export class AppModule { 
  
}