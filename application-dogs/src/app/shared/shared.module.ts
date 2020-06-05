import { NotificationService } from './messages/snackbar/notification.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio/radio.component';
import { NgModule } from '@angular/core';
import { InputComponent } from './input/input.component';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';


@NgModule({
    declarations: [
        InputComponent,
        RadioComponent,
        SnackbarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        InputComponent,
        RadioComponent,
        SnackbarComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers:[
        NotificationService
    ]
})
export class SharedModule {}