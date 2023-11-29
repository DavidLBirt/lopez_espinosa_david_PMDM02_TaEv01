import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})

export class Tab4Page implements OnInit {
  numero: number = 0; //Creamos una variable de tipo number para el numero a adivinar
  mensaje: string = ''; // Creamos una variable de tipo string para el mensaje
  intentos: number = 0; // Creamos una variable para el número de intentos.
  mostrarBoton: boolean = false; // Creamos una variable para mostrar o no el boton de volver a jugar

  constructor(private alertController: AlertController) { }

  ngOnInit() {
    this.numero = Math.round(Math.random() * 100); // Asignamos un valor aleatorio a la variable
  }

  comprobar(num: any) {
    num = Number(num);
    this.intentos++; // Cada vez que demos a comprobar incrementará el número de intentos.
    if (num < 0 || num > 100) {
      this.mensaje = 'Introduce un número entre 0 y 100';
    } else if (num < this.numero) {
      this.mensaje = 'Introduce un número mayor';
    } else if (num > this.numero) {
      this.mensaje = 'Introduce un número menor';
    } else {
      this.mensaje = 'Enhorabuena!! Has Acertado el número secreto.';
      this.mostrarBoton = true; // Ponemos el boton de volver a jugar visible
    }
  }

  async reiniciar() {
    const alert = await this.alertController.create({
      header: '¿Nuevo juego?', // El titulo de la alerta.
      //message: '¿Quieres empezar una nueva partida?', // El mensaje de la alerta.
      buttons: [ // Los botones de la alerta.
        {
          text: 'CANCEL', // El texto del botón cancelar.
          role: 'cancel', // El rol del boton cancelar.
          handler: () => {
            console.log('Cancelado'); // La función se ejecuta al pulsar el botón cancelar.
          }
        },
        {
          text: 'OK', // El texto del botón aceptar
          handler: () => {
            console.log('Aceptado');
            this.mostrarBoton = false; // Asignamos el valor false a la variable mostrarBoton
            this.intentos = 0; // Reiniciamos el valor de la variable intentos
            this.numero = Math.round(Math.random() * 100); // Generamos un nuevo número aleatorio
            this.mensaje = ''; // Limpiamos el valor de la variable mensaje
          }
        }
      ]
    });
    await alert.present();
  }
}
