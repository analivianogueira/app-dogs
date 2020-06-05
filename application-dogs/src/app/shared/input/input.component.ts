import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {
  
  input: any;
  @Input() label: string;
  @Input() errorMessage: string;

  @ContentChild(NgModel) model: NgModel;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(){
    this.input = this.model;
    if(this.input === undefined){
      throw new Error('Esse componente precisa ser usado com uma diretiva do tipo ngModel ou FormControl.');
    }
  }

}
