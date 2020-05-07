import { CarItem } from './../pet-care-details/shopping-cart/car-item.model';
import { OrderService } from './order.service';
import { RadioOption } from './../shared/radio/radio-option.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão de Crédito', value: 'CRED'}
  ];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  cartItems(): CarItem[]{
    return this.orderService.cartItems();
  }

  increaseQty(item: CarItem){
    this.orderService.increasyQty(item);
  }

  removeItem(item: CarItem){
    this.orderService.removeItem(item);
  }
  
  decreaseQty(item: CarItem){
    this.orderService.decreaseQty(item);
  }
}
