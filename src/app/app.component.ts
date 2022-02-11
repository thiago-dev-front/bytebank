import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  transferencia: any;

  // Componente nova-transferencia cria o OutPut, esse por sua vez emite esse avento na classe do app.component
  transferir($event) {
    console.log($event);
  // Refatoração das variaveis e tipagens
    this.transferencia = $event;
  }
}
