import { TransferenciaService } from './../services/transferencia.service';
import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  // Dispara as informações para um conteúdo externo, a variavel deve ser instanciada ao new EventEmitter()
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService) {}

  transferir() {
    console.log('Solicitado nova transferencia');
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    console.log('teste', valorEmitir);

    this.service.adicionar(valorEmitir)
    .subscribe(resultado => {
        console.log('vazio?',  resultado);
        this.aoTransferir.emit(valorEmitir);
        this.limparCampos();
      },
      (error) => console.error(error)
    );
    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
