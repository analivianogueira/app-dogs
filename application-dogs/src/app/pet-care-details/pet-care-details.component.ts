import { Care } from './../pet-care/care-services/care.model';
import { PetCareService } from './../pet-care/pet-care.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet-care-details',
  templateUrl: './pet-care-details.component.html',
  styleUrls: ['./pet-care-details.component.css']
})
export class PetCareDetailsComponent implements OnInit {

  care: Care;

  constructor(private petCareService: PetCareService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.petCareService.careServiceByid('')
    //.subscribe(care => this.care = care);

    this.care = this.petCareService.careServiceByIdLocale(this.route.snapshot.params['id']);
  }

}
