import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '@modules/dashboard/models/transaction';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable()
export class DashboardService {
    constructor(private _httpClient: HttpClient) {}

    getDashboard$(): Observable<{}> {
        return of({});
    }

    getTokenNumber(): Observable<number> {
        return this._httpClient.get<number>(`${environment.apiUrl}/tokens-current`);
    }
    getStatistics(): Observable<number> {
        return this._httpClient.get<number>(`${environment.apiUrl}/statistics`);
    }

    getTokensValue(): Observable<number> {
        return this._httpClient.get<number>(`${environment.apiUrl}/tokens-value`);
    }

    getLastIncome(): Observable<number> {
        return this._httpClient.get<number>(`${environment.apiUrl}/last-income`);
    }

    getTokensSpent(): Observable<number> {
        return this._httpClient.get<number>(`${environment.apiUrl}/tokens-spent`);
    }

    getLastTransactions(): Observable<Transaction[]> {
        return this._httpClient.get<Transaction[]>(`${environment.apiUrl}/transactions`);
    }
}
