import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProveedorService {

  private api = 'http://localhost:8080/api/proveedores';

  constructor(private http: HttpClient) {}

  // Obtener todos
  getAll() {
    return this.http.get<any[]>(this.api);
  }

  // Crear proveedor ✅
  create(data: any) {
    return this.http.post(this.api, data);
  }

  // Eliminar (opcional pero recomendado)
  delete(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }

  // Obtener por ID (opcional)
  getById(id: number) {
    return this.http.get<any>(`${this.api}/${id}`);
  }

  // Actualizar (opcional)
  update(id: number, data: any) {
    return this.http.put(`${this.api}/${id}`, data);
  }
}