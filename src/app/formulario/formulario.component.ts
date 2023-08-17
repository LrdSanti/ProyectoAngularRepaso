import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PopUpInformacionComponent } from '../pop-up-informacion/pop-up-informacion.component'; // Ruta al componente del popup


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
  nombre: string = '';
  apellido: string = '';
  cedula: string = '';
  sexo: string = '';
  modalRef: any;

   constructor(private modalService: BsModalService) { }

  openPopup() {
    const initialState = {
      nombre: this.nombre,
      apellido: this.apellido,
      cedula: this.cedula,
      sexo: this.sexo
    };

    this.modalService.show(PopUpInformacionComponent, { initialState });

    this.modalRef = this.modalService.show(PopUpInformacionComponent, {
  initialState: {
    nombre: this.nombre,
    apellido: this.apellido,
    cedula: this.cedula,
    sexo: this.sexo
  }
});
  }

  
  onSubmit() {
    // ... lógica del envío del formulario ...
    this.openPopup();
  }
}
