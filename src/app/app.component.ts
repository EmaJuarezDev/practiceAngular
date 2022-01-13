import { Component, Input, VERSION } from '@angular/core';
import { SaluditosService } from './saludo.service';
import { Animalocos } from './animalocos';

@Component({
  selector: 'Hi',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private miServicio: SaluditosService) {}
  name = 'Angular ' + 'pelao';

  zoo = [
    new Animalocos('Gatico', 1, 'grey'),
    new Animalocos('Perrito', 2, 'royalblue'),
    new Animalocos('Serpiente', 3, 'green'),
  ];
  intentoMetodo() {
    this.miServicio.mostrarUnSaludito('Hola pepox');
  }

  intentoMetodo1(texto: string) {
    this.miServicio.mostrarUnSaludito(texto);
  }

  animalRandom() {
    let randomN = Math.trunc(Math.random() * this.zoo.length);
    let randomName = this.zoo[randomN];

    this.miServicio.mostrarUnSaludito(randomName.name);
  }

  animalFav = this.zoo[2];
}
