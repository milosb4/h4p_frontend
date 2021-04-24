import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private auth: AuthService) {}
    // tslint:disable-next-line:typedef
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.auth.currentUserValue;
        if (currentUser) {
            const role = currentUser.role;
            const expectedRole = route.data.expectedRoles;
            if(typeof expectedRole !== 'undefined'){
                if (expectedRole.includes(role)) {
                    return true;
                } else {
                    return this.router.createUrlTree(['/']);
                }
            }
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
        return true;
    }
}
