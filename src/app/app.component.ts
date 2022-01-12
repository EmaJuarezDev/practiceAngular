import { Component, Input, VERSION } from '@angular/core';
import { SaluditosService } from './saludo.service';

@Component({
  selector: 'Hi',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private miServicio: SaluditosService) {}
  name = 'Angular ' + 'pelao';

  intentoMetodo() {
    this.miServicio.mostrarUnSaludito('Hola pepox');
  }
}
