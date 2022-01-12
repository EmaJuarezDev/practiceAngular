import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaluditosService {
  constructor() {}

  mostrarUnSaludito(mensaje: string) {
    alert(mensaje);
  }
}
