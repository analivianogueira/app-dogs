import { ShoppingCartService } from './../pet-care-details/shopping-cart/shopping-cart.service';
import { PetCareService } from './../pet-care/pet-care.service';
import { NgModule } from '@angular/core';
import { OrderService } from '../order/order.service';

@NgModule({
    providers:[
        PetCareService,
        ShoppingCartService,
        OrderService
    ]
})
export class CoreModule{

}