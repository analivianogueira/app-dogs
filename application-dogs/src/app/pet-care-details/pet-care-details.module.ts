import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuComponent } from './menu/menu.component';
import { PetCareDetailsComponent } from './pet-care-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ROUTES} from '../app.router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    PetCareDetailsComponent,
    MenuComponent,
    MenuItemComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ]
})
export class PetCareDetailsModule { }
