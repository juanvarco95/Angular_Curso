import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor() { }

  public mensajeHijo: string | undefined ;
  public usuarioHijo: Array<Usuario> = new Array<Usuario>();
  input: any;

  public persona: Usuario = new Usuario();

  ngOnInit(): void {
  }

  public enviarMensaje(): void {
    this.mensajeHijo = "Soy tu padre";
  }

  public recibirSaludo($event: any): void {
    console.log($event);
  }

  public mostrarDato(){
    console.log(this.input);
  }

}
