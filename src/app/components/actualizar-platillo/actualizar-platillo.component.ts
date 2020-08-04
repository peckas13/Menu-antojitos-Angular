import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AntojitosService } from 'src/app/services/antojitos.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-platillo',
  templateUrl: './actualizar-platillo.component.html',
  styleUrls: ['./actualizar-platillo.component.css']
})
export class ActualizarPlatilloComponent implements OnInit {
  @Input() set data(value) {
    this.platillo =  value;
  }
  @Output() mostrar = new EventEmitter();
  @Output() cancelar = new EventEmitter();
  platillo: any;
  constructor(public service: AntojitosService) { }

  ngOnInit(): void {
  }
  cancelarActualizar(){
    this.cancelar.emit();
  }
  actualizarPlatillo(form: NgForm){
    this.service.actualizarPlatillo(this.platillo,this.platillo._id).then((resp: any) =>{
      console.log(resp);
      form.reset();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Platillo actualizado con éxito',
        toast: true,
        showConfirmButton: false,
        timer: 1500
      });
      this.mostrar.emit(this.platillo.idCategoria._id);
    }).catch((err: any) =>{
      let error;
      if(err.error.err.errors.strNombre.properties.message) {
        error = err.error.err.errors.strNombre.properties.message;
        console.log(err.error.err.errors.strNombre.properties.message);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error,
          toast: true,
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        error = err;
        console.log(err);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error,
          toast: true,
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  }

}
