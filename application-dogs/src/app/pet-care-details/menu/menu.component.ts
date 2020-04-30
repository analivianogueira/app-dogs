import { MenuItem } from './../menu-item/menu-item.model';
import { PetCareService } from './../../pet-care/pet-care.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: MenuItem[];

  constructor(private petCareService: PetCareService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.menu = this.petCareService.getMenuById(this.route.parent.snapshot.params['id']);

  }

}
