import { trigger, state, style, transition, animate } from '@angular/animations';

import { Component, OnInit } from '@angular/core';
import { Care } from './care-services/care.model';

import { PetCareService } from './pet-care.service';

@Component({
  selector: 'app-pet-care',
  templateUrl: './pet-care.component.html',
  styleUrls: ['./pet-care.component.css'],
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state ('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class PetCareComponent implements OnInit {
  searchBarState = 'hidden';

  cares: Care[] = [];

  constructor(private petCareService: PetCareService) { }

  ngOnInit(): void {
    this.cares = this.petCareService.caresList();

   /** this.petCareService.careServices()
      .subscribe(care => this.cares = care);*/
  }

  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }

}
