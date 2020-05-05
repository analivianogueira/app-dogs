import { RadioOption } from './radio-option.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  @Input() options: RadioOption[];

  value: any;

  constructor() { }

  ngOnInit(): void {
  }

  setValue(value: any){
    this.value = value;
  }

}
