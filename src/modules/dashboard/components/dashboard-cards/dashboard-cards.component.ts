import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DashboardService } from '@modules/dashboard/services';

@Component({
    selector: 'sb-dashboard-cards',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-cards.component.html',
    styleUrls: ['dashboard-cards.component.scss'],
})
export class DashboardCardsComponent implements OnInit {
    public tokenNumber = 0;
    public tokenValue = 0;
    public lastTokenIncome = 0;
    public tokenSpent = 0;
    // @ts-ignore
    public lastTransactions: any[];

    constructor(private dashboardService: DashboardService) {}
    ngOnInit() {
        this.dashboardService.getTokenNumber().subscribe(x => (this.tokenNumber = x));
        this.dashboardService.getTokensValue().subscribe(x => (this.tokenValue = x));
        this.dashboardService.getLastIncome().subscribe(x => (this.lastTokenIncome = x));
        this.dashboardService.getTokensSpent().subscribe(x => (this.tokenSpent = x));
        this.dashboardService.getLastTransactions().subscribe(x => (this.lastTransactions = x));
    }
}
