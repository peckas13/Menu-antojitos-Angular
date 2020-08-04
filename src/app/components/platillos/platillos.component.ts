import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AntojitosService } from 'src/app/services/antojitos.service';
import Swal from 'sweetalert2';
import { PdfServiceService } from 'src/app/services/pdf-service.service';
import { ExportDataService } from 'src/app/services/export-data.service';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.css']
})
export class PlatillosComponent implements OnInit {
  @Input() platillo: any;
  @Output() mostrar = new EventEmitter();
  @Output() actualizar = new EventEmitter();
  filterValue = {strNombre: ''};
  arraPlatillos = [];
  arraNewPlatillos = [];
  constructor(public service:AntojitosService,public _PdfService:PdfServiceService, public excelService:ExportDataService) { }

  ngOnInit(): void {
  }

  activar(value: boolean,id: any) {
    let body;
    if(value){
      body = {blnActivo: false};
    } else {
      body = {blnActivo: true};
    }
    this.service.actualizarPlatillo(body,id).then((resp: any) =>{
      console.log(resp);
      this.mostrar.emit(resp.cnt.idCategoria);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${resp.cnt.strNombre} ${body.blnActivo ? 'Activado' : 'Desactivado'} con éxito`,
        toast: true,
        showConfirmButton: false,
        timer: 1500
      });
    }).catch((err:any) =>{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `Error al ${body.blnActivo ? 'Activar' :  'Desactivar'} este campo`,
        toast: true,
        showConfirmButton: false,
        timer: 1500
      });
      console.log(err);
    });
  }

  mostrarActualizar(id: any){
    console.log(id)
    this.actualizar.emit(id);
  }

  preparePdf(){
    for (const platillo of this.platillo) {
      let element = [
        platillo.idCategoria.strNombre.replace(/\:null/gi, ':""'),
        platillo.strNombre.replace(/\:null/gi, ':""'),
        platillo.strDescripcion.replace(/\:null/gi, ':""'),
        platillo.strIngredientes.replace(/\:null/gi, ':""'),
        platillo.nmbPiezas,
        platillo.nmbPrecio,
        platillo.blnActivo ? 'Si' : 'No',

      ];

      this.arraPlatillos.push(element);
      this.arraNewPlatillos = this.arraPlatillos;
    }
  }
  exportPDF() {
    this.preparePdf();
    let header = [
      {
        text: "Categoría",
        alignment: "center",
        style: "tableHeader",
        bold: true,
        fillColor: "#2a3e52",
        color: "#ffffff",
        size: 13,

      },
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
        text: "Ingredientes",
        alignment: "center",
        style: "tableHeader",
        bold: true,
        fillColor: "#2a3e52",
        color: "#ffffff",
        size: 13,

      },
      {
        text: "Numero de Piezas",
        alignment: "center",
        style: "tableHeader",
        bold: true,
        fillColor: "#2a3e52",
        color: "#ffffff",
        size: 13,

      },
      {
        text: "Precio",
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
      this.arraNewPlatillos,
      "center"
    );
  }
  exportAsXLSX() {
    let jsnInfo = {};
    const jsnObject = [];

    if (this.platillo.length !== 0) {

      for (let datos of this.platillo) {
        jsnInfo = {};
        jsnInfo = {
          'Categoria': datos.idCategoria.strNombre,
          'Nombre': datos.strNombre,
          'Descripcion': datos.strDescripcion,
          'Ingredientes': datos.strIngredientes,
          'Piezas': datos.nmbPiezas,
          'Precio': datos.nmbPrecio,
          'Activo': datos.blnActivo ? 'Si' : 'No'
        };
        if (jsnInfo !== '') {
          jsnObject.push(jsnInfo);
        }
      }
      this.excelService.exportAsExcelFile(jsnObject, `Reporte platillos`);
    }
  }

}
