import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlatilloModel } from 'src/app/models/platillo';
import { NgForm } from '@angular/forms';
import { AntojitosService } from 'src/app/services/antojitos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-platillo',
  templateUrl: './registrar-platillo.component.html',
  styleUrls: ['./registrar-platillo.component.css']
})
export class RegistrarPlatilloComponent implements OnInit {

  platillo: PlatilloModel = new PlatilloModel();
  @Input() idCategoria: any;
  @Output() mostrar = new EventEmitter();
  @Output() cancelar = new EventEmitter();
  constructor(public service: AntojitosService) { }

  ngOnInit(): void {
  }

  cancelarRegistrar(){
    this.cancelar.emit();
  }
  registrarPlatillo(form: NgForm) {
    this.platillo.idCategoria = this.idCategoria;
    this.service.registrarPlatillo(this.platillo).then((resp:any) => {
      console.log(resp);
      this.mostrar.emit(this.idCategoria);
      form.reset();Swal.fire({
        position: 'top-end',
        icon: 'success',
        toast: true,
        title: 'Registrado con éxito',
        showConfirmButton: false,
        timer: 1500
      });
    }).catch((err:any) => {
      let error;
      if(err.error.err.errors.strNombre.properties.message) {
        error = err.error.err.errors.strNombre.properties.message;
        console.log(err.error.err.errors.strNombre.properties.message);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Algo salio mal',
          text: error,
          toast: true,
          showConfirmButton: false,
          timer: 2500
        });
      } else {
        error = err;
        console.log(err);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Algo salio mal',
          text: error,
          toast: true,
          showConfirmButton: false,
          timer: 2500
        });
      }
    });
  }

}
