import { ShoppingCartService } from './pet-care-details/shopping-cart/shopping-cart.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import {ROUTES} from './app.router'
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { PetCareComponent } from './pet-care/pet-care.component';
import { CareServicesComponent } from './pet-care/care-services/care-services.component';
import { PetCareService } from './pet-care/pet-care.service';
import { PetCareDetailsModule } from './pet-care-details/pet-care-details.module';
import { OrderComponent } from './order/order.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    PetCareComponent,
    CareServicesComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    PetCareDetailsModule
  ],
  providers: [ PetCareService,
    ShoppingCartService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
