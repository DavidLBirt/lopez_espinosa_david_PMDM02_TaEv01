import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})

export class Tab4Page implements OnInit {
  numero: number = 0; //Creamos una variable de tipo number para el numero a adivinar
  mensaje: string = ''; // Creamos una variable de tipo string para el mensaje


  constructor() { }

  ngOnInit() {
    this.numero = Math.round(Math.random() * 100); // Asignamos un valor aleatorio a la variable
  }

  comprobar(num: any) {
    num = Number(num);
    if (num < 0 || num > 100) {
      this.mensaje = 'Introduce un número entre 0 y 100';
    } else if (num < this.numero) {
      this.mensaje = 'Introduce un número mayor';
    } else if (num > this.numero) {
      this.mensaje = 'Introduce un número menor';
    } else {
      this.mensaje = 'Has acertado';
    }
  }
}
