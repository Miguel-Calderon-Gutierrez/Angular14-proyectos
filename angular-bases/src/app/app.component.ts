import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Miguel';
  placetexto:string = 'escriba algo aqui';
  habilitado:boolean = true;
  imagenAngular:string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png'
  texto = 'Video explicación de event binding';
  InputData = '';

  constructor(){
    setInterval(() => {
      this.nombre = "Miguel Angel"
      this.habilitado = false
    }, 3000)
  }

  getSuma(numero1:number, numero2:number){
    return numero1+numero2;
  }

  cambiarTexto(): void {
    this.texto = 'En el proximo video vamos a ver two way data-binding';
  }

}
