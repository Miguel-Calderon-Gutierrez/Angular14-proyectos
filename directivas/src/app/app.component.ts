import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'directivas';
  lista: any[] = [
    { Nombre: 'Miguel', Estado: true },
    { Nombre: 'Angel', Estado: false },
    { Nombre: 'Diana', Estado: true },
  ];

  verContenido = false;
  mostrar():void{
    this.verContenido = !this.verContenido;
  }
}
