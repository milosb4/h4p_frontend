import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService,
                private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                this.router.navigate(['/sign-in'], {
                    queryParams: {
                        redirectTo: document.location.pathname
                    }
                });
                location.reload(true);
            }else if(err.status === 0){
                this.authenticationService.logout();
                this.router.navigate(['/sign-in'], {
                    queryParams: {
                        redirectTo: document.location.pathname
                    }
                });
                location.reload(true);
            }
            return throwError(err);
        }))
    }
}
