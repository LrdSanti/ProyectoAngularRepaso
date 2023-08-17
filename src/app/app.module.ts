import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PruebaComponent } from './prueba/prueba.component';
import { PopUpInformacionComponent } from './pop-up-informacion/pop-up-informacion.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    PruebaComponent,
    PopUpInformacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
