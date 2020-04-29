import { Component, OnInit } from '@angular/core';
import { Care } from './care-services/care.model';

import { PetCareService } from './pet-care.service';

@Component({
  selector: 'app-pet-care',
  templateUrl: './pet-care.component.html',
  styleUrls: ['./pet-care.component.css']
})
export class PetCareComponent implements OnInit {

  cares: Care[] = [];

  constructor(private petCareService: PetCareService) { }

  ngOnInit(): void {
    this.cares = this.petCareService.caresList();

   /** this.petCareService.careServices()
      .subscribe(care => this.cares = care);*/
  }



}
