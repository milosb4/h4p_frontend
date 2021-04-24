import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '@common/app-common.module';
import { ChartsModule } from '@modules/charts/charts.module';
import { DiscountsComponent } from '@modules/discounts/discounts.component';
import { DiscountsService } from '@modules/discounts/services/discounts.service';
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
    providers: [DiscountsService],
    declarations: [DiscountsComponent],
    exports: [DiscountsComponent],
})
export class DiscountsModule {}
