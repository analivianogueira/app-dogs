import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  @Input('proprietaria') isOwner: boolean;
  menus: string[] = ['Sobre', 'Dormitório', 'Banho e Tosa'];

  constructor() { }

  ngOnInit(): void {
  }

  clicked(dog){
    console.log(dog);
}

}
