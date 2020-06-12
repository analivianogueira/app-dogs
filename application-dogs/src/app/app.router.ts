import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import {Routes} from '@angular/router';

import { MenuComponent } from './pet-care-details/menu/menu.component';
import { PetCareDetailsComponent } from './pet-care-details/pet-care-details.component';
import { PetCareComponent } from './pet-care/pet-care.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
    {path: '',  component: HomeComponent},
    {path: 'petcare', component: PetCareComponent},
    {path: 'petcare/:id', component: PetCareDetailsComponent,
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent}
        ]
    },
    {path: 'order-summary', component: OrderSummaryComponent},
    {path: 'about', component: AboutComponent},
    {path: 'order', component: OrderComponent},
    //{path: 'about', loadChildren: '.about.module#AboutModule'},
    //{path: 'order', loadChildren: './order/order.module#OrderModule'},
    {path: '**', component: NotFoundComponent}

]