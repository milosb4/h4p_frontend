import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '@common/app-common.module';
import { ChartsModule } from '@modules/charts/charts.module';
import * as dashboardComponents from '@modules/dashboard/components';
import { DashboardActionsComponent } from '@modules/dashboard/components/dashboard-actions/dashboard-actions.component';
import * as dashboardContainers from '@modules/dashboard/containers';
import * as dashboardGuards from '@modules/dashboard/guards';
import * as dashboardServices from '@modules/dashboard/services';
import { DiscountsComponent } from '@modules/discounts/discounts.component';
import { DiscountsService } from '@modules/discounts/services/discounts.service';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { TablesModule } from '@modules/tables/tables.module';
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
    ],
    providers: [DiscountsService],
    declarations: [
        DiscountsComponent
    ],
})
export class DiscountsModule { }
