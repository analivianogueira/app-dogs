import { CarItem } from './../pet-care-details/shopping-cart/car-item.model';
import { OrderService } from './order.service';
import { RadioOption } from './../shared/radio/radio-option.model';
import { Component, OnInit } from '@angular/core';
import { OrderItem, Order } from './order.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControlName, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;

  delivery: number = 8;
  numeroPattern: string = '^[0-9]*$';

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão de Crédito', value: 'CRED'}
  ];

  constructor(private orderService: OrderService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      numberAddress: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numeroPattern)]),
      neighborhoodAdress: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    }, {validator: OrderComponent.equalsTo})
  }

  static equalsTo(group: AbstractControl): {[key: string]: boolean}{
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    if(!email || !emailConfirmation){
      return undefined;
    }
    if(email.value !== emailConfirmation.value){
      return {emailsNotMatch: true}
    }
    return undefined;
  }

  verifyInputValid(value: string): boolean{
    return this.orderForm.get(value).valid && (this.orderForm.get(value).touched || this.orderForm.get(value).dirty);
  }

  verifyInputInvalid(value: string): boolean{
    return !this.orderForm.get(value).valid && (this.orderForm.get(value).touched || this.orderForm.get(value).dirty);
  }

  itemsValue(): number{
    return this.orderService.itemsValue();
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

  checkoutOrder(order: Order){
    order.orderItems = this.cartItems().map((item: CarItem) => new OrderItem(item.quantity, item.menuItem.id));
    if(this.orderService.checkoutOrder(order)){
      this.orderService.clear();
      this.router.navigate(['/order-summary']);
    }
    //.subscribe((orderId: string) =>{
     // this.router.navigate(['/order-summary']);
    //  this.orderService.clear();
   // }); 
  }
}
