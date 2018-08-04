import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { AppSettings } from './../../common/config';
import { contentHeaders } from './../../common/headers';
import { loginModel } from './../../models/login.model';
import { GlobalLoaderFacade as SlimLoadingBarService } from '../globalLoaderFacade/global-loader-facade.service';
import { getSingleError } from '../../common/error';


@Injectable()
export class AuthService {

    public errorText: string;
    public isLoggedIn: boolean;
    public jwtToken: string;

    public attemptingToLogIn: boolean;
    public redirectUrl: string;


    constructor(
        private router: Router,
        private http: HttpClient,
        private loaderService: SlimLoadingBarService,
        private translateService: TranslateService,
    ) {
        /**
     * attempt to load the token and profile from local storage. if either cannot be found, reset both fields.
     * @type {any}
     */

        const clientJWT = localStorage.getItem(AppSettings.JWT_TOKEN_KEY);
        const clientProfile = localStorage.getItem(AppSettings.PROFILE_KEY);

        if (clientJWT) {
            this.loginHelper(clientJWT);
        } else {
            this.reset();
        }
    }



    reset(): void {


        this.isLoggedIn = false;
        this.attemptingToLogIn = false;
        this.jwtToken = null;

        this.errorText = null;

        localStorage.removeItem(AppSettings.JWT_TOKEN_KEY)
    }

    loginHelper(token: string): void {

        this.isLoggedIn = true;
        this.jwtToken = token;

        // persist to cache
        localStorage.setItem(AppSettings.JWT_TOKEN_KEY, this.jwtToken);
    }

    getIsLoggedIn() {
        return this.isLoggedIn
    }

    loginUser(user: loginModel) {
        /* prevent simultaneous logins and race conditions */
        if (this.attemptingToLogIn) {
            return;
        }
        this.attemptingToLogIn = true;

        return this.http.post('/users/login', user, { headers: contentHeaders })
            .subscribe(
                response => {
                    this.reset();

                    this.loginHelper(
                        response['token']
                    );

                    let navigateTarget = '/';

                    if (this.redirectUrl) {
                        navigateTarget = this.redirectUrl;
                        this.redirectUrl = null;
                    }
                    this.router.navigate([navigateTarget]);
                },
                (error) => {
                    this.reset();

                    this.errorText = this.translateService.instant(
                        getSingleError(error),
                      );
                }
            )
    }
    logout() {
        this.reset();

        this.router.navigate(['/']);

    }

    getAuthHeader(headers: HttpHeaders): HttpHeaders {
        // if our current token is expired
        const headersWithAuth = headers.append('Authorization', 'Bearer ' + this.getToken());

        return headersWithAuth;
    }

    getToken(): string {
        return this.jwtToken;
    }
}