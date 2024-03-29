import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService, private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError(err => {
                if (err.status === 401) {
                    // auto logout if 401 response returned from api
                    this.authenticationService.signOut();
                    this.router.navigate(['/login'], {
                        queryParams: {
                            redirectTo: document.location.pathname,
                        },
                    });
                    location.reload(true);
                } else if (err.status === 0) {
                    this.authenticationService.signOut();
                    this.router.navigate(['/login'], {
                        queryParams: {
                            redirectTo: document.location.pathname,
                    }
                    });
                    location.reload(true);
                }
                return throwError(err);
            })
        );
    }
}
