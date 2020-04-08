import { Component, OnInit } from '@angular/core';
import { Care } from './care-services/care.model';

@Component({
  selector: 'app-pet-care',
  templateUrl: './pet-care.component.html',
  styleUrls: ['./pet-care.component.css']
})
export class PetCareComponent implements OnInit {

  cares: Care[] = [
      {
        id: '1',
        nameService: 'Pet Shop',
        imagePath: 'assets/imgs/pet-shop.jpg',
        description: 'Serviços de higiene completos para o seu cão. Banho com produtos de primeira linha, tosa/tosa higienica, hidratação para os pelos e penteados diversos. Você pode acompanhar o seu cão durantes os procedimentos.'
    },
    {
        id: '2',
        nameService: 'Passeadores',
        imagePath:'assets/imgs/passeadores.jpg',
        description: 'Passeadores disponíveis das 06h00 às 22h00. Busca e deixa seu cãozinho na sua residência, sem custo adicional.'
    },
    {
        id: '3',
        nameService: 'Veterinário',
        imagePath: 'assets/imgs/veterinario.jpg',
        description: 'Veterinários de diversas especialidades, diponíveis 24horas para atendimento.',
    },
    {
        id: '4',
        nameService: 'Adestradores',
        imagePath: 'assets/imgs/adestrador.jpg',
        description: 'Adestramento de diversos tipo com profissionais certificados e espaços equipados para competições.',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }



}
