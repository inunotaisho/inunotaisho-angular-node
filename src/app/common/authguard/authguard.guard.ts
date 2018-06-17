import { Injectable} from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import {AuthService} from '../../services/authservice/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router:Router){

    }
    canActivate(){
        if(!this.auth.isLoggedIn){
            this.router.navigate(["login"])
        }
        return this.auth.isLoggedIn;
    }
}

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }

    this.authService.redirectUrl = state.url;

    this.router.navigate(['/login']);
    return false;
  } 
}

/**
 * Super Admin guard protects routes specifically available to the super admin, and so on for each of the user roles.
 */
// @Injectable()
// export class CanActivateViaSuperAdminGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {

//   }

//   canActivate(): boolean {
//     if (this.authService.isSuper()) {
//       return true;
//     }

//     this.router.navigate(['/']);
//     return false;
//   }
// }

// @Injectable()
// export class CanActivateViaOrgAdminGuard implements CanActivate {
//   constructor(private authService: AuthService) {

//   }

//   canActivate(): boolean {
//     return this.authService.isOrgGeneral();
//   }
// }

// @Injectable()
// export class CanActivateViaLocalAdminGuard implements CanActivate {
//   constructor(private authService: AuthService) {

//   }

//   canActivate(): boolean {
//     return this.authService.isLocation();
//   }
// }

/**
 * If the user is already logged in, and attempts to navigate to /login, then redirect them to the dashboard.
 */
@Injectable()
export class CanActivateViaAlreadyLoggedInGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(): boolean {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }