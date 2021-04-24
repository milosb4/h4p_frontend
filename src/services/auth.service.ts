import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}

    getAuthToken() {
        return localStorage.getItem('token');
  }

    // @ts-ignore
    setAuthToken(token) {
        return localStorage.setItem('token', token);
    }

    getDecodedToken() {
        const token = this.getAuthToken();
        return token ? jwt_decode(token) : null;
    }

    isUserAuthenticated() {
        if (this.getAuthToken()) {
            return true;
        }
        return false;
    }

    signIn(args: any): Observable<any> {
        console.log(`${environment.apiUrl}api/users/login`);
        console.log(args);
        return this.http.post(`${environment.apiUrl}/api/users/login`, args, httpOptions);
    }

    signOut() {
        localStorage.removeItem('token');
    }
}
