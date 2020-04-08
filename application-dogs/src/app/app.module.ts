import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import {ROUTES} from './app.router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { PetCareComponent } from './pet-care/pet-care.component';
import { PetHotelComponent } from './pet-hotel/pet-hotel.component';
import { CareServicesComponent } from './pet-care/care-services/care-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    PetCareComponent,
    PetHotelComponent,
    CareServicesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
