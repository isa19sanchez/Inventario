import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  api = "http://localhost:8080/productos";

  constructor(private http: HttpClient) {}

  listar(){
    return this.http.get(this.api);
  }

  crear(producto:any){
    return this.http.post(this.api, producto);
  }

  eliminar(id:number){
    return this.http.delete(this.api + "/" + id);
  }

}