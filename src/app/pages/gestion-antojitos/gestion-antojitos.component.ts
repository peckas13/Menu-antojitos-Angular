import { Component, OnInit, Output } from '@angular/core';
import { AntojitosService } from 'src/app/services/antojitos.service';
import { CategoriaModel } from 'src/app/models/categoria';

@Component({
  selector: 'app-gestion-antojitos',
  templateUrl: './gestion-antojitos.component.html',
  styleUrls: ['./gestion-antojitos.component.css']
})
export class GestionAntojitosComponent implements OnInit {
  insertarAntojito: boolean = true;
  actualizarAntojito: boolean = false;
  tablaAntojito: boolean = true;
  insertarPlatillo: boolean = false;
  actualizarPlatillo: boolean = false;
  categoriaData: any;
  platilloData: any;
  categoria: any;
  idCategoria: any;
  //   categoria  = [{
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
  platillo = [{
    idCategoria: 'sjdie83jdiaisxmicm3nc',
    strNombre: 'Tacos',
    strDescripcion: 'Tacos de pastor y más',
    strIngredientes: 'Pastor y tortillas',
    nmbPiezas: 12,
    nmbPrecio: 15.66,
    blnActivo: true
  },{
    idCategoria: 'sjdie83jdiaisxmicm3nc',
    strNombre: 'Tacos2',
    strDescripcion: 'Tacos de pastor y más',
    strIngredientes: 'Pastor y tortillas',
    nmbPiezas: 12,
    nmbPrecio: 15.66,
    blnActivo: false
  }]
  constructor(public service: AntojitosService) { }

  ngOnInit(): void {
    this.obtenerAntojitos();
  }
  obtenerAntojitos(){
    this.service.mostrarCategoria().then((resp:any) => {
      console.log(resp);
      this.categoria = resp.cnt;
    }).catch((err:any) =>{
      console.log(err);
    })
  }
  mostrarActualizarAntojito(id: any) {
    this.tablaAntojito = true;
    this.insertarAntojito = false;
    this.actualizarAntojito = true;
    console.log(id);
    this.service.mostrarCategoriaPorId(id).then((resp:any) => {
      console.log(resp);
      this.categoriaData = resp.cnt;
    }).catch((err: any) =>{
      console.log(err);
    });
  }
  mostrarActualizarPlatillo(id: any) {
    this.tablaAntojito = false;
    this.insertarAntojito = false;
    this.actualizarAntojito = false;
    this.actualizarPlatillo = true;
    this.insertarPlatillo = false;
    console.log(id);
    this.service.mostrarPlatillosPorId(id).then((resp:any) => {
      console.log(resp);
      this.platilloData = resp.cnt;
    }).catch((err: any) =>{
      console.log(err);
    });
  }
  cancelarActualizarPlatillo(){
    this.actualizarPlatillo = false;
    this.insertarPlatillo = true;
    this.tablaAntojito = false;
  }
  cancelarInsertarPlatillo(){
    this.actualizarPlatillo = false;
    this.insertarPlatillo = false;
    this.insertarAntojito = true;
    this.tablaAntojito = true;
  }
  cancelarActualizarAntojito(){
    this.actualizarAntojito = false;
    this.insertarAntojito = true;
    this.tablaAntojito = true;
  }
  mostrarPlatillos(id: any) {
    this.tablaAntojito = false;
    this.insertarAntojito = false;
    if(this.actualizarPlatillo){
      this.insertarPlatillo = false;
    } else {
    this.actualizarAntojito = false;
    this.insertarPlatillo = true;
    }
    console.log(id);
    // obtener platillos
    this.service.mostrarPlatillos(id).then((resp:any) => {
      this.platillo = resp.cnt;
      this.idCategoria = id;
      console.log(resp);
    }).catch((err: any) =>{
      console.log(err);
    });
  }
   mostrarPlatillosActualizados(id: any) {
    this.tablaAntojito = false;
    this.insertarAntojito = false;
    this.actualizarAntojito = false;
    console.log(id);
    // obtener platillos
    this.service.mostrarPlatillos(id).then((resp:any) => {
      this.platillo = resp.cnt;
      this.idCategoria = id;
      console.log(resp);
    }).catch((err: any) =>{
      console.log(err);
    });
  }

}
