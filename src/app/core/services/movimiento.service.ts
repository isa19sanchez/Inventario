import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MovimientoService {

  private api = 'http://localhost:8080/api/movimientos';

  constructor(private http: HttpClient) {}

  // Obtener todos los movimientos
  getAll() {
    return this.http.get<any[]>(this.api);
  }

  // Obtener movimiento por ID
  getById(id: number) {
    return this.http.get<any>(`${this.api}/${id}`);
  }

  // Crear movimiento
  create(data: any) {
    return this.http.post(this.api, data);
  }

  // Actualizar movimiento
  update(id: number, data: any) {
    return this.http.put(`${this.api}/${id}`, data);
  }

  // Eliminar movimiento
  delete(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}