import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-pop-up-informacion',
  templateUrl: './pop-up-informacion.component.html',
  styleUrls: ['./pop-up-informacion.component.css']
})
export class PopUpInformacionComponent implements OnInit{
  
  nombre: string = '';
  apellido: string = '';
  cedula: string='';
  sexo: string='';

  constructor(public modalRef: BsModalRef) { }
  
  ngOnInit(): void {
  }

}
