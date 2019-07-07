import { CollapseModule, TooltipModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule }from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { FileUploadModule } from 'ng2-file-upload';
import {CloudinaryModule, CloudinaryConfiguration, provideCloudinary} from '@cloudinary/angular-5.x';
import * as cloudinary from 'cloudinary-core';


// for AoT support, https://github.com/ocombe/"@ngx-translate/core"#aot
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SimpleNotificationsModule } from 'angular2-notifications';

/**
 * common
 */

import { NavbarComponent } from './common/navbar/navbar.component';
import { SocialBannerComponent } from './common/banners/social/social.component';
import { LanguagePickerComponent } from './common/languagePicker/languagePicker.component';
import { ReturnButtonComponent } from './common/banners/returnbutton/returnbutton.component';
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

/**
 * Guards
 */

import { AuthGuard, alreadyLoggedIn } from './common/authguard/authguard.guard';

/**
 * services
 */

import { AuthService } from '../app/services/authservice/authentication.service';
import { TranslateService } from './services/translate/translate.service';
import { GlobalLoaderFacade } from './services/globalLoaderFacade/global-loader-facade.service';
import { ImageUploadService } from './services/imageUpload/image-upload.service';

/* translate support */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}




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
        LanguagePickerComponent,
        LoginComponent,
        NavbarComponent,
        ProfileComponent,
        PortfolioComponent,
        portImgContainerComponent,
        RegComponent,
        ReturnButtonComponent,
        WriteComponent,
        ErrorComponent,
        SocialBannerComponent,
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

        CollapseModule,

        FileUploadModule,

        FormsModule,

        HttpClientModule,

        RouterModule.forRoot(routes),

        SimpleNotificationsModule.forRoot(),

        SlimLoadingBarModule,

        TooltipModule.forRoot(),

        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient],
            },
        }),

    ],
    providers: [
        AuthService,
        AuthGuard,
        alreadyLoggedIn,
        TranslateService,
        GlobalLoaderFacade,
        ImageUploadService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}

