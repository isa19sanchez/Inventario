import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movimientos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './movimientos.html',
  styleUrls: ['./movimientos.css']
})
export class Movimientos {

  api = 'http://localhost:8080/api/movimientos';
  apiProductos = 'http://localhost:8080/api/productos';

  movimientos: any[] = [];
  productos: any[] = [];

  nuevoMovimiento: any = {
    tipo: '',
    cantidad: 0,
    productoId: null
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargar();
    this.cargarProductos();
  }

  cargar() {
    this.http.get<any[]>(this.api).subscribe(data => {
      this.movimientos = data;
    });
  }

  cargarProductos() {
    this.http.get<any[]>(this.apiProductos).subscribe(data => {
      this.productos = data;
    });
  }

  guardar() {
    this.http.post(this.api, this.nuevoMovimiento).subscribe(() => {
      alert('Movimiento registrado');
      this.nuevoMovimiento = { tipo: '', cantidad: 0, productoId: null };
      this.cargar();
    });
  }
}