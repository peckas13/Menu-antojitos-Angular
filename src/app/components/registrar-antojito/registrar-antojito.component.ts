import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriaModel } from 'src/app/models/categoria';
import { AntojitosService } from 'src/app/services/antojitos.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registrar-antojito',
  templateUrl: './registrar-antojito.component.html',
  styleUrls: ['./registrar-antojito.component.css']
})
export class RegistrarAntojitoComponent implements OnInit {
 categoria: CategoriaModel = new CategoriaModel();
 @Output() mostrar =  new EventEmitter();
  constructor(public service: AntojitosService) { }

  ngOnInit(): void {
  }

  cancelar(form: NgForm){
    form.reset();
  }
  registrarAntojito(form: NgForm){
    this.service.registrarCategoria(this.categoria).then((resp:any) =>{
      console.log(resp);
      form.reset();
      this.mostrar.emit();
      Swal.fire({
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
          toast: true,
          text: error,
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
          toast: true,
          text: error,
          showConfirmButton: false,
          timer: 2500
        });
      }
    });
  }
}
