import { ChangeDetectorRef, Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SBSortableHeaderDirective, SortEvent } from '@modules/tables/directives';
import { Country } from '@modules/tables/models';
import { CountryService } from '@modules/tables/services';
import { Observable } from 'rxjs';

@Component({
    selector: 'sb-discounts',
    templateUrl: './discounts.component.html',
    styleUrls: ['./discounts.component.scss'],
})
export class DiscountsComponent implements OnInit {
    @Input() pageSize = 4;

    countries$!: Observable<Country[]>;
    total$!: Observable<number>;
    sortedColumn!: string;
    sortedDirection!: string;

    name = 'Angular';
    page = 1;
    // @ts-ignore
    pageSize = 10;
    items = [];

    @ViewChildren(SBSortableHeaderDirective) headers!: QueryList<SBSortableHeaderDirective>;
    constructor(
        public countryService: CountryService,
        private changeDetectorRef: ChangeDetectorRef
    ) {
        for (let i = 1; i <= 6; i++) {
            // @ts-ignore
            this.items.push({ Name: i });
        }
    }

    ngOnInit() {
        this.countryService.pageSize = this.pageSize;
        this.countries$ = this.countryService.countries$;
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
