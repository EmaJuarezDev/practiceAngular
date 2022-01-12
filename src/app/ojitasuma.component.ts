import { Component } from '@angular/core';

@Component({
  selector: 'happyComp',
  template: `<h1>Hello Triangulo {{numero}} </h1>`,
  styles: [`h1 { border: medium ridge red ; }`],
})
export class HappyComponent {

  

  numero = 2;
}
