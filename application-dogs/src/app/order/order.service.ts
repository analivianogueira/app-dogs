import { CarItem } from './../pet-care-details/shopping-cart/car-item.model';
import { ShoppingCartService } from './../pet-care-details/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService{

    constructor(private shoppingCartService: ShoppingCartService){}

    cartItems(): CarItem[]{
        return this.shoppingCartService.items;
    }

    increasyQty(item: CarItem){
        this.shoppingCartService.increasyQty(item);
    }

    removeItem(item: CarItem){
        this.shoppingCartService.removeItem(item);
    }

    decreaseQty(item: CarItem){
        this.shoppingCartService.decreaseQty(item);
    }
}