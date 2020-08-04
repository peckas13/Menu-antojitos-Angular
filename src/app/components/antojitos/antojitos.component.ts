import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoriaModel } from 'src/app/models/categoria';
import { AntojitosService } from 'src/app/services/antojitos.service';
import { PdfServiceService } from 'src/app/services/pdf-service.service';
import { ExportDataService } from 'src/app/services/export-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-antojitos',
  templateUrl: './antojitos.component.html',
  styleUrls: ['./antojitos.component.css']
})
export class AntojitosComponent implements OnInit {
  @Input() categoria: any;
  @Output() mostrar =  new EventEmitter();
  @Output() actualizar = new EventEmitter();
  @Output() platillos = new EventEmitter();
  filterValue: any = { strNombre: '' };
  arrCategorias = [];
  arraNewCategorias = [];
  // categoria  = [{
  //   _id: 'ejfojeijfieijeij23132',
  //   strNombre: 'Categoria1',
  //   strDescripcion: 'Comida relacionada con la categoria 1',
  //   blnActivo: false
  // },{
  //   _id: 'ejfojeijfieijeij23132',
  //   strNombre: 'Categoria12',
  //   strDescripcion: 'Comida relacionada con la categoria 12',
  //   blnActivo: true
  // }];
  constructor(public service: AntojitosService,public _PdfService:PdfServiceService,public excelService:ExportDataService) { }

  ngOnInit(): void {
  }

  preparePdf() {
    console.log(this.categoria)
    for (const categoria of this.categoria) {

      let element = [
        categoria.strNombre.replace(/\:null/gi, ':""'),
        categoria.strDescripcion.replace(/\:null/gi, ':""'),
        categoria.blnActivo ? 'Sí' : 'No'
      ];
      console.log(element);
      this.arrCategorias.push(element);
      this.arraNewCategorias = this.arrCategorias;
    }
  }
  exportPDF() {
    this.preparePdf();
    let header = [
      {
        text: "Nombre",
        alignment: "center",
        style: "tableHeader",
        bold: true,
        fillColor: "#2a3e52",
        color: "#ffffff",
        size: 13,

      },
      {
        text: "Descripcion",
        alignment: "center",
        style: "tableHeader",
        bold: true,
        fillColor: "#2a3e52",
        color: "#ffffff",
        size: 13,

      },
      {
        text: "  Activo  ",
        alignment: "center",
        style: "tableHeader",
        bold: true,
        fillColor: "#2a3e52",
        color: "#ffffff",
        size: 13,
      }

    ];
    this._PdfService.generatePdf(
      "Reporte de Categorias",
      header,
      this.arraNewCategorias,
      "center"
    );
  }

  exportAsXLSX() {
    let jsnInfo = {};
    const jsnObject = [];

    if (this.categoria.length !== 0) {

      for (let datos of this.categoria) {
        jsnInfo = {};
        jsnInfo = {
          'Categorias': datos.strNombre,
          'Descripcion': datos.strDescripcion,
          'Activo': datos.blnActivo ? 'Si' : 'No'
        };
        if (jsnInfo !== '') {
          jsnObject.push(jsnInfo);
        }
      }
      this.excelService.exportAsExcelFile(jsnObject, 'Categorias');
    }
  }
 
activar(value: boolean,id: any) {
    let body;
    if(value){
      body = {blnActivo: false};
    } else {
      body = {blnActivo: true};
    }
    this.service.actualizarCategoria(body,id).then((resp: any) =>{
      console.log(resp);
      this.mostrar.emit();
      Swal.fire({
        position: 'top-end',
        toast: true,
        icon: 'success',
        title: `${resp.cnt.strNombre} ${body.blnActivo ? 'Activado' : 'Desactivado'} con éxito`,
        showConfirmButton: false,
        timer: 1500
      });
    }).catch((err:any) =>{
      console.log(err);
      Swal.fire({
        position: 'top-end',
        toast: true,
        icon: 'error',
        title: `Ocurrio un error al tratar de ${body.blnActivo ? 'Activar' : 'Desactivar'} este campo`,
        showConfirmButton: false,
        timer: 1500
      });
    });
  }

  mostrarActualizar(id: any) {

    this.actualizar.emit(id);
  }

  gestionarPlatillos(id: any) {
    this.platillos.emit(id);
  }
}
