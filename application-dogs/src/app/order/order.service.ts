import { DOG_API } from './../app.api';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { CarItem } from './../pet-care-details/shopping-cart/car-item.model';
import { ShoppingCartService } from './../pet-care-details/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { Headers } from '@angular/http';

@Injectable()
export class OrderService{

    constructor(private shoppingCartService: ShoppingCartService, private http: Http){}

    itemsValue():number{
        return this.shoppingCartService.total();
    }

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

    clear(){
        this.shoppingCartService.clear();
    }

    checkoutOrder(order: Order): string{
        //const headers = new Headers();
        //headers.append('Content-Type', 'application/json');
        //return this.http.post(`${DOG_API}/orders`, JSON.stringify(order), new RequestOptions({headers: headers}))
        //                     .map(response => response.json());
        return '1';
    }
}