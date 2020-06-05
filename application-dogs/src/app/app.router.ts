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
    //Carregamento usando lazy loading (carregamento preguiçoso)
    {path: 'about', loadChildren: './about/about.module.ts#AboutModule'},
    {path: 'order', loadChildren: './order/order.module#OrderModule'}

]