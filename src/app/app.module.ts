import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule }from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from './common/shared/shared.module';


import { FileUploadModule } from 'ng2-file-upload';
import {CloudinaryModule, CloudinaryConfiguration, provideCloudinary} from '@cloudinary/angular-5.x';
import * as cloudinary from 'cloudinary-core';

import { AppSettings } from './common/config';

/**
 * routes
 */

import { routes } from "./routes/routes.module";

/**
 * components
 */

import { HomeComponent } from './components/home/home.component';
import { EdComponent } from './components/education/ed.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogPreviewComponent } from './components/blog/blog-preview/blog-preview.component';
import { BlogPostComponent } from './components/blog/blogpost/blogpost.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WriteComponent } from './components/blog/write/write.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegComponent } from './components/reg/reg.component';
import { ErrorComponent } from './components/errors/error.component';
import { MediaToolTipComponent } from './components/blog/write/editor/media-tool-tip/media-tool-tip.component';
import { ActionScopeComponent } from './components/blog/write/editor/action-scope/action-scope.component';
import { MasterFooterComponent } from './components/blog/blogpost/master-footer/master-footer.component';
import { ClapAndTagsComponent } from './components/blog/blogpost/master-footer/clap-and-tags/clap-and-tags.component';
import { FollowComponent } from './components/blog/blogpost/master-footer/follow/follow.component';
import { CommentsComponent } from './components/blog/blogpost/master-footer/comments/comments.component';
import { ResponsesComponent } from './components/blog/blogpost/master-footer/responses/responses.component';
import { ResponseEditorComponent } from './components/blog/blogpost/master-footer/response-editor/response-editor.component';
import portImgContainerComponent from './components/portfolio/portfolio-images/portfolio.image.component';
import { EditorComponent } from './components/blog/write/editor/editor.component';



export function declarations(): any {
    return [
        AppComponent,
        /* our app's components imported in the root module*/
        BlogPreviewComponent,
        BlogPostComponent,
        ContactComponent,
        EdComponent,
        EditorComponent,
        HomeComponent,
        LoginComponent,
        ProfileComponent,
        PortfolioComponent,
        portImgContainerComponent,
        RegComponent,
        WriteComponent,
        ErrorComponent,
        MediaToolTipComponent,
        ActionScopeComponent,
        MasterFooterComponent,
        ClapAndTagsComponent,
        FollowComponent,
        CommentsComponent,
        ResponsesComponent,
        ResponseEditorComponent
    ]
}

@NgModule({
    declarations: [
        AppComponent,
        declarations()
    ],
    imports: [

        BrowserAnimationsModule,
        
        BrowserModule,

        CloudinaryModule.forRoot(cloudinary, AppSettings.cloudinaryConfiguration),

        FileUploadModule,

        HttpClientModule,

        RouterModule.forRoot(routes),

        SharedModule
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}

