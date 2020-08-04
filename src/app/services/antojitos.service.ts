import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { CategoriaModel } from '../models/categoria';
import { PlatilloModel } from '../models/platillo';
@Injectable({
  providedIn: 'root'
})
export class AntojitosService {
url = 'http://localhost:3000/';
  constructor(public http: HttpClient) {}

  mostrarCategoria() {
    return this.http.get(`${this.url}categoria/obtener`).toPromise();
  }
  mostrarCategoriaPorId(id: any) {
    return this.http.get(`${this.url}categoria/obtener/${id}`).toPromise();
  }
  registrarCategoria(body: CategoriaModel) {
    return this.http.post(`${this.url}categoria/registrar`, body).toPromise();
  }
  actualizarCategoria(body: CategoriaModel,id: any) {
    return this.http.put(`${this.url}categoria/actualizar/${id}`, body).toPromise();
  }
  mostrarPlatillosPorId(id: any) {
    return this.http.get(`${this.url}platillo/obtenerId/${id}`).toPromise();
  }
  mostrarPlatillos(id:any) {
    return this.http.get(`${this.url}platillo/obtener/${id}`).toPromise();
  }
  registrarPlatillo(body: PlatilloModel) {
    return this.http.post(`${this.url}platillo/registrar`, body).toPromise();
  }
  actualizarPlatillo(body: PlatilloModel,id: any) {
    return this.http.put(`${this.url}platillo/actualizar/${id}`, body).toPromise();
  }

}
