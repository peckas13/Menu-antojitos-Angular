import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoriaModel } from 'src/app/models/categoria';
import { AntojitosService } from 'src/app/services/antojitos.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-antojito',
  templateUrl: './actualizar-antojito.component.html',
  styleUrls: ['./actualizar-antojito.component.css']
})
export class ActualizarAntojitoComponent implements OnInit {  categoria: any;
  @Input() set data(value) {
    this.categoria =  value;
    console.log(this.categoria);
  }
  @Output() mostrar = new EventEmitter();
  @Output() cancelar = new EventEmitter();

  constructor(public service: AntojitosService) { }

  ngOnInit(): void {
  }
  cancelarActualizar(){
    this.cancelar.emit()
  }
  actualizarAntojito(form: NgForm){
    this.service.actualizarCategoria(this.categoria,this.categoria._id).then((resp: any) => {
      console.log(resp);
      form.reset();
      this.mostrar.emit();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        toast: true,
        title: 'Actualizado con éxito',
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
