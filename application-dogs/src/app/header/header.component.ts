import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  @Input('proprietaria') isOwner: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  clicked(dog){
    console.log(dog);
}

}
