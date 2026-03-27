import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProveedorService } from '../../core/services/proveedor.service';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './proveedores.html',
  styleUrls: ['./proveedores.css'],
})
export class Proveedores {

  // LISTA
  proveedores: any[] = [];

  // FORMULARIO
  nuevoProveedor: any = {
    nombre: '',
    telefono: '',
    email: '',
    direccion: ''
  };

  constructor(private proveedorService: ProveedorService) {}

  ngOnInit() {
    this.cargarProveedores();
  }

  cargarProveedores() {
    this.proveedorService.getAll().subscribe(data => {
      this.proveedores = data;
    });
  }

  guardar() {
    this.proveedorService.create(this.nuevoProveedor).subscribe(() => {
      alert('Proveedor guardado');

      // limpiar formulario
      this.nuevoProveedor = {
        nombre: '',
        telefono: '',
        email: '',
        direccion: ''
      };

      this.cargarProveedores();
    });
  }

  eliminar(id: number) {
    this.proveedorService.delete(id).subscribe(() => {
      this.cargarProveedores();
    });
  }
}