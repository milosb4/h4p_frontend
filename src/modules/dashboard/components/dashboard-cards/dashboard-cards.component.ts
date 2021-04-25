import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { DashboardService } from '@modules/dashboard/services';

@Component({
    selector: 'sb-dashboard-cards',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-cards.component.html',
    styleUrls: ['dashboard-cards.component.scss'],
})
export class DashboardCardsComponent implements OnInit {
    public _tokenNumber = 0;
    public tokenValue = 0;
    public lastTokenIncome = 0;
    public tokenSpent = 0;
    // @ts-ignore
    public lastTransactions: any[];

    constructor(private dashboardService: DashboardService, private cdr: ChangeDetectorRef) {
        // this.setStats();
    }
    ngOnInit() {
        this.setStats();
    }

    setStats() {
        this.dashboardService.getStatistics().subscribe(x => {
            console.log(x)
            // @ts-ignore
            this._tokenNumber = x.tokenAmount;
            // @ts-ignore
            this.tokenValue = x.tokenValue
            // @ts-ignore
            this.tokenSpent = x.tokensSpent;
            // @ts-ignore
            this.lastTokenIncome = x.lastIncome;
            // @ts-ignore

            this.lastTransactions = x.lastTransaction;
            this.cdr.detectChanges();
        })
    }

    get tokenNumber() {
        return this._tokenNumber;
    }
}
