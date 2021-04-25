import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '@common/app-common.module';
import { BudgetComponent } from '@modules/budget/budget.component';
import { BudgetService } from '@modules/budget/services/budget.service';
import { ChartsModule } from '@modules/charts/charts.module';
import { DashboardService } from '@modules/dashboard/services';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { TablesModule } from '@modules/tables/tables.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
        ChartsModule,
        TablesModule,
        SlickCarouselModule,
        NgbModule,
    ],
    providers: [BudgetService, DashboardService],
    declarations: [BudgetComponent],
    exports: [BudgetComponent],
})
export class BudgetModule {}
