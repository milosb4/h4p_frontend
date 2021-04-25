import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Transaction } from '@modules/dashboard/models/transaction';
import { DashboardService } from '@modules/dashboard/services';
import { SBSortableHeaderDirective, SortEvent } from '@modules/tables/directives';
import { Country } from '@modules/tables/models';
import { CountryService } from '@modules/tables/services';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'sb-dashboard-tables',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-tables.component.html',
    styleUrls: ['dashboard-tables.component.scss'],
})
export class DashboardTablesComponent implements OnInit {
    @Input() pageSize = 5;

    countries$!: Observable<any[]>;
    total$!: Observable<number>;
    sortedColumn!: string;
    sortedDirection!: string;

    @ViewChildren(SBSortableHeaderDirective) headers!: QueryList<SBSortableHeaderDirective>;

    constructor(
        public countryService: CountryService,
        private changeDetectorRef: ChangeDetectorRef,
        public dash: DashboardService
    ) {}

    ngOnInit() {
        this.countryService.pageSize = this.pageSize;
        this.dash.getLastTransactions().subscribe(x => (this.countries$ = of(x)));
        this.total$ = this.countryService.total$;
    }

    onSort({ column, direction }: SortEvent) {
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this.countryService.sortColumn = column;
        this.countryService.sortDirection = direction;
        this.changeDetectorRef.detectChanges();
    }
}
