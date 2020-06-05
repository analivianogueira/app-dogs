import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/animations";

import { NotificationService } from './notification.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px',
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {
  message: string;
  snackVisibility: string = 'hidden'

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    //De um lado temos métodos que mandam mensagem para o evento.
    //Desse lado é feito uma inscrição no evento para receber uma notificação quando ele for alterado.
    
    //Com o método do permito executar uma ação quando uma mensagem chegar, ou seja, pego a mensagem
    //e altero o snackVisibility.
    //Com o SwitchMap eu troco o observable da message para o timer e me inscrevo nesse evento para alterar o snackVisibility.
    //Assim tudo fica sincronizado pois o switchMap faz com que quando chega uma message e ele vai criar um time, caso ja tenha um timer criado, ele faz um unsubscribe naquele timer e coloca o novo, assim não some o snackbar.
    this.notificationService.notifier.do(message =>{
      this.message = message;
      this.snackVisibility = 'visible';
    }).switchMap(message => Observable.timer(3000))
      .subscribe(timer => this.snackVisibility = 'hidden')
  }

}
