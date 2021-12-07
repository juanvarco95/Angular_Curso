import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public nombre: string = 'Juan Miguel';
  public nombres: string[] = ['Juan', 'Miguel', 'Vargas'];
  public listUsuario: Usuario[] = [];
  public activarButton: boolean = false;
  public imagenURL = "https://placeimg.com/400/200/any";


  constructor(){
    this.addFirstElement('Juan');
    this.addLastElement('Vargas');
    console.log(this.nombres);
    console.log(this.nombres.sort());
    console.log(this.nombres.splice(this.nombres.indexOf('Juan')));

    let usuario:Usuario = new Usuario();
    usuario.id = 0;
    usuario.name = 'Juan';
    usuario.age = 26;
    usuario.status = true;
    this.listUsuario.push(usuario);
    
    let usuario2:Usuario = new Usuario();
    usuario2.id = 1;
    usuario2.name = 'Miguel';
    usuario2.age = 26;
    usuario2.status = true;
    this.listUsuario.push(usuario2);
    
    // this.elimniarId(1);
  }

  public addFirstElement(nombre: string): void {
    this.nombres.unshift(nombre);
  }

  public addLastElement(nombre: string): void {
    this.nombres.push(nombre);
  }

  public deleteLastElement():void {
    let res = this.nombres.pop();
    console.log('Se eliminó ' + res);
  }

  public concatenar(list: string):string[]{
    return this.nombres.concat(list);
  }  

  public elimniarId(id: number):void{
    for(const iterator of this.listUsuario){
      if(iterator.id === id) {
        this.listUsuario.splice(this.listUsuario.indexOf(iterator), 1);
        console.log('Fue eliminado el id: ' + id);
      }
    }
  }

  public desactivarButton(data: boolean):void {
    this.activarButton = data;
  }

  public mostrarEvento(event: any):void {
    console.log(event);
    console.log("El enter fue presionado");
  }


}
