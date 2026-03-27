import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../core/services/producto.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-lista-productos',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './lista-productos.html'
})
export class ListaProductos {

  productos: any[] = [];
  filtro = '';

  constructor(private service: ProductoService) {}

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    this.service.getAll().subscribe(res => this.productos = res);
  }

  eliminar(id: number) {
    this.service.delete(id).subscribe(() => this.cargar());
  }
}