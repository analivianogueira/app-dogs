import { ShoppingCartComponent } from './pet-care-details/shopping-cart/shopping-cart.component';
import { MenuComponent } from './pet-care-details/menu/menu.component';
import {Routes} from '@angular/router';

import { PetCareDetailsComponent } from './pet-care-details/pet-care-details.component';
import { PetCareComponent } from './pet-care/pet-care.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
    {path: '',  component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'petcare', component: PetCareComponent},
    {path: 'petcare/:id', component: PetCareDetailsComponent,
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'carrinho', component: ShoppingCartComponent}
        ]
    }
]