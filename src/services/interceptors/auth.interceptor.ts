import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthService } from '../auth.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.auth.getAuthToken();
        const authReq = req.clone({ setHeaders: { Authorization: `Bearer ${authToken}` } });
        return next.handle(authReq);
    }
}
