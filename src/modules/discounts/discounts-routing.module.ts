import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscountsComponent } from '@modules/discounts/discounts.component';
import { DiscountsModule } from '@modules/discounts/discounts.module';
import { SBRouteData } from '@modules/navigation/models';

export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'Discounts',
            breadcrumbs: [
                {
                    text: 'Discounts',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: DiscountsComponent,
    },
];

@NgModule({
    imports: [DiscountsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class DiscountsRoutingModule {}
