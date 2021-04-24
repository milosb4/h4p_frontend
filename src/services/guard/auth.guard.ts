import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private auth: AuthService) {}
    // tslint:disable-next-line:typedef
    canActivate() {
        if (this.auth.isUserAuthenticated()) {
            return true;
        } else {
            this.router.navigateByUrl('login');
            return false;
        }
    }
}
