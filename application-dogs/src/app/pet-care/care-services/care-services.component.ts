import { Component, OnInit, Input } from '@angular/core';

import { Care } from './care.model';

@Component({
  selector: 'app-care-services',
  templateUrl: './care-services.component.html',
  styleUrls: ['./care-services.component.css']
})
export class CareServicesComponent implements OnInit {

  @Input() careService: Care;

  constructor() { }

  ngOnInit(): void {
  }

}
