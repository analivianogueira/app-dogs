import { CarItem } from './../../pet-care-details/shopping-cart/car-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {
  
  @Input() items: CarItem[];
  @Output() increaseQty = new EventEmitter<CarItem>();
  @Output() decreaseQty = new EventEmitter<CarItem>();
  @Output() remove = new EventEmitter<CarItem>();

  constructor() { }

  ngOnInit(): void {
  }

  emitIncreaseQty(item: CarItem){
    this.increaseQty.emit(item);
  }

  emitDecreaseQty(item: CarItem){
    this.decreaseQty.emit(item);
  }

  emitRemove(item: CarItem){
    this.emitRemove(item);
  }

}
