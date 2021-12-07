import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor() { }
  
  @Input() recibido: string | undefined;
  @Input() usuarioRecibido: Array<Usuario> | undefined;
  
  @Output() enviarPapa = new EventEmitter<string>();

  ngOnInit(): void {
    this.usuarioRecibido = [
      {
        id: 1,
        name: "Juan",
        age: 36,
        status: false
      }
    ];
  }
  public enviar(){
    this.enviarPapa.emit("Hola papá");
  }
}
