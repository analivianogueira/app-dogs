import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

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
    debugger;
    this.input = this.model;
    if(this.input === undefined){
      throw new Error('Esse componente precisa ser usado com uma diretiva do tipo ngModel');
    }
  }

}
