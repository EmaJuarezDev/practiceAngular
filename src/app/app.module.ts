import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HappyComponent } from './ojitasuma.component';
import { ClaseColor } from './ojitocolor.directive';
import { SaluditosService } from './saludo.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, HappyComponent, ClaseColor],
  bootstrap: [AppComponent],
  providers: [SaluditosService],
})
export class AppModule {}
