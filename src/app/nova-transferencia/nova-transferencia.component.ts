import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector:'app-nova-transferencia',
  templateUrl:'./nova-transferencia.component.html',
  styleUrls:['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService){

  }

  transferir(){
    const valorEmitir: Transferencia = {valor: this.valor, destino:this.destino};
    //this.aoTransferir.emit(valorEmitir);

    this.service.adicionar(valorEmitir).subscribe(
      resultado=>{
      console.log(resultado);
      this.limparCampos();
    },
    error => console.log(error))
  }

  limparCampos(){
    this.valor = undefined;
    this.destino = undefined;
  }
}
