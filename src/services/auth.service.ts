import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { User } from '../models/user';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const TOKEN_KEY = 'currentUser';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private jwtHelper = new JwtHelperService();

    url = environment.apiUrl;
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(
            JSON.parse(localStorage.getItem(TOKEN_KEY) as string)
        );
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    // @ts-ignore
    login(credentials): Observable<any> {
        // @ts-ignore
        return this.http.post<string>(`${this.url}/api/Auth`, credentials, { observe: 'response', responseType: 'text'})
            .pipe(
                map(res => {
                    // @ts-ignore
                    const response = res.body;
                    const decoded = this.jwtHelper.decodeToken(response);
                    const user = this.transformJWT(decoded, response);
                    localStorage.setItem(TOKEN_KEY, JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    return user.role;
                }),
                catchError(e => {
                    const err = JSON.parse(e.error);
                    // this.showAlert(err.error);
                    throw new Error(e);
                })
            );
    }

    // tslint:disable-next-line:typedef
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        // @ts-ignore
        this.currentUserSubject.next(null);
    }

    // tslint:disable-next-line:typedef
    // @ts-ignore
    transformJWT(jwt: any, jwtEncode) {
        const mSchema = environment.microsoftSchema;
        const xmlSchema = environment.xmlSoapSchema;

        const role = `${mSchema}/role`;
        const userName = `${xmlSchema}/nameidentifier`;
        const forDelete = [role, userName];

        jwt.role = jwt[role];
        jwt.userName = jwt[userName];

        forDelete.forEach(x => delete jwt[x]);

        const user = new User(jwt.nameid, jwt.userName, jwt.role, jwt.sub, jwtEncode)
        return user;
    }
}
