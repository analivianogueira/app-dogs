import { MenuItem } from './../pet-care-details/menu-item/menu-item.model';
import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ErrorHandle } from './../app.error-handle';
import { DOG_API } from './../app.api';
import { Care } from './care-services/care.model';

@Injectable()
export class PetCareService{
    menuResponse: MenuItem[] = [];

    constructor(private http: Http){}

    careServices(): Observable<Care[]>{
        return this.http.get(`${DOG_API}/cares`)
        .map(response => response.json())
        .catch(ErrorHandle.handleError)
    }

    careServiceByid(id: string): Observable<Care>{
        return this.http.get(`${DOG_API}/cares/${id}`)
        .map(response => response.json())
        .catch(ErrorHandle.handleError)
    }

    careServiceByIdLocale(id: string): Care{
        for (var item  of this.listOfCares) {
            console.log(item);
            if (item.id == id){
                return item;
            }
        } 
        return null;
    }

    getMenuById(id: string): MenuItem[]{
        this.menuResponse = [];
        for (var item  of this.listOfMenuItens) {
            console.log(item);
            if (item.id == id){
                this.menuResponse.push(item);
            }
        } 
        return this.menuResponse;
    }
    
    caresList (): Care[] {
        return this.listOfCares;
    }

    listOfCares: Care[] = [
        
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

    listOfMenuItens: MenuItem[] = [
        {
            id: '1',
            nameItem: 'Banho',
            description: 'Banho para o seu cãozinho',
            price: 40.00
        },
        {
            id: '1',
            nameItem: 'Tosa',
            description: 'Tosa para o seu cãozinho',
            price: 60.00
        },
        {
            id: '1',
            nameItem: 'Tosa Higienica',
            description: 'Tosa Higienica para o seu cãozinho',
            price: 30.00
        },
        {
            id: '2',
            nameItem: 'Passeio horário comercial',
            description: 'Passeio para o seu cão no período de 1 hora.',
            price: 20.00
        },
        {
            id: '2',
            nameItem: 'Passeio horário extra',
            description: 'Passeio para o seu cão no período de 1 hora.',
            price: 35.00
        },
        {
            id: '3',
            nameItem: 'Consulta médica  horário comercial',
            description: 'Consulta para o seu cão em horário comercial.',
            price: 90.00
        },
        {
            id: '3',
            nameItem: 'Consulta médica  após as 20h00.',
            description: 'Consulta para o seu cão após as 20h00',
            price: 120.00
        },
        {
            id: '4',
            nameItem: 'Adestramento comandos básicos.',
            description: 'Valor referente a hora aula.',
            price: 40.00
        },
        {
            id: '4',
            nameItem: 'Adestramento competições.',
            description: 'Para essa especialidade deve ser fechado um pacote de 5 aulas.',
            price: 400.00
        }

    ];
}