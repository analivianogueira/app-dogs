import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import {ROUTES} from './app.router'
import { HttpModule } from '@angular/http';
import { ShoppingCartComponent } from './pet-care-details/shopping-cart/shopping-cart.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { PetCareComponent } from './pet-care/pet-care.component';
import { CareServicesComponent } from './pet-care/care-services/care-services.component';
import { PetCareService } from './pet-care/pet-care.service';
import { PetCareDetailsModule } from './pet-care-details/pet-care-details.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    PetCareComponent,
    CareServicesComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    PetCareDetailsModule
  ],
  providers: [ PetCareService,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
