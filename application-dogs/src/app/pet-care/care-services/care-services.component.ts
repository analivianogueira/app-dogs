import { Component, OnInit, Input } from '@angular/core';
import { animate } from '@angular/animations';
import { transition } from '@angular/animations';
import { style } from '@angular/animations';
import { state } from '@angular/animations';
import { trigger } from '@angular/animations';

import { Care } from './care.model';

@Component({
  selector: 'app-care-services',
  templateUrl: './care-services.component.html',
  styleUrls: ['./care-services.component.css'],
  animations: [
    trigger('petCareAppeared', [
      state('ready', style({opacity: 1})),
      transition ('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class CareServicesComponent implements OnInit {

  petCareState = 'ready'

  @Input() careService: Care;

  constructor() { }

  ngOnInit(): void {
  }

}
