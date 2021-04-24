import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from '@modules/budget/budget.component';
import { BudgetModule } from '@modules/budget/budget.module';
import { SBRouteData } from '@modules/navigation/models';

export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'Budget',
            breadcrumbs: [
                {
                    text: 'Budget',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: BudgetComponent,
    },
];

@NgModule({
    imports: [BudgetModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class BudgetRoutingModule {}
