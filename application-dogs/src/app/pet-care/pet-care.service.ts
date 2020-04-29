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
        debugger;
        for (var item  of this.listOfCares) {
            console.log(item);
            if (item.id == id){
                return item;
            }
        } 
        return null;
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
}