import { EventEmitter } from '@angular/core';

export class NotificationService {
    //Emissor de evento
    notifier = new EventEmitter<string>();

    //Metodo que emite a mensagem recebida
    notify(message: string){
        this.notifier.emit(message);
    }
}