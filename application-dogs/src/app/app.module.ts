import { OrderModule } from './order/order.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router'
import {ROUTES} from './app.router'
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PetCareComponent } from './pet-care/pet-care.component';
import { CareServicesComponent } from './pet-care/care-services/care-services.component';
import { PetCareDetailsModule } from './pet-care-details/pet-care-details.module';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PetCareComponent,
    CareServicesComponent,
    OrderSummaryComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
    PetCareDetailsModule,
    OrderModule
  ],
  exports: [
    PetCareDetailsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
