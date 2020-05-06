import { MenuItem } from './../menu-item/menu-item.model';
import { CarItem } from './car-item.model';
export class ShoppingCartService {
    
    items:CarItem[] = [];

    clear(){
        this.items = [];
    }

    addItem(menuItem:MenuItem){
        let foundItem = this.items.find((mItem) => mItem.menuItem.id == menuItem.id);
        if(foundItem){
            foundItem.quantity = foundItem.quantity + 1;
        }else{
            this.items.push(new CarItem(menuItem));
        }
    }

    removeItem(item: CarItem){
        this.items.splice(this.items.indexOf(item), 1);
    }

    total():number{
        return this.items.map(item => item.value())
                         .reduce((prev,value) => prev+value, 0);
    }
}