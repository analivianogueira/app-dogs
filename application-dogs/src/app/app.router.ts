import { PetHotelComponent } from './pet-hotel/pet-hotel.component';
import { PetCareComponent } from './pet-care/pet-care.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {Routes} from '@angular/router';

export const ROUTES: Routes = [
    {path: '',  component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'petcare', component: PetCareComponent},
    {path: 'pethotel', component: PetHotelComponent}
]