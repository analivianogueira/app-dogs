import { NotificationService } from './../../shared/messages/snackbar/notification.service';
import { Injectable } from '@angular/core';

import { MenuItem } from './../menu-item/menu-item.model';
import { CarItem } from './car-item.model';


//Todo serviço que vai receber algo deve ser marcado com @Injectable
@Injectable()
export class ShoppingCartService {

    constructor(private notificationService: NotificationService){}
    
    items:CarItem[] = [];

    clear(){
        this.items = [];
    }

    addItem(menuItem:MenuItem){
        let foundItem = this.items.find((mItem) => mItem.menuItem.id == menuItem.id);
        if(foundItem){
            this.increasyQty(foundItem);
        }else{
            this.items.push(new CarItem(menuItem));
        }
        this.notificationService.notify(`Você adicionu o item ${menuItem.nameItem} no carrinho.`);
    }

    removeItem(item: CarItem){
        this.items.splice(this.items.indexOf(item), 1);
        this.notificationService.notify(`Você removeu o item ${item.menuItem.nameItem} do carrinho.`);
    }

    total():number{
        return this.items.map(item => item.value())
                         .reduce((prev,value) => prev+value, 0);
    }

    increasyQty(item: CarItem){
        item.quantity = item.quantity + 1;
    }

    decreaseQty(item: CarItem){
        item.quantity = item.quantity - 1;
        if(item.quantity === 0){
            this.removeItem(item);
        }
    }
}