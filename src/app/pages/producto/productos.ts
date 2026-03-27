import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../core/services/producto.service';

@Component({
    selector: 'app-productos',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './productos.html',
    styleUrls: ['./productos.css']
})
export class Productos {

    productos: any[] = [];

    nuevoProducto: any = {
        nombre: '',
        descripcion: '',
        precio: 0,
        stock: 0,
        proveedorId: null
    };

    constructor(private productoService: ProductoService) { }

    ngOnInit() {
        this.cargarProductos();
    }

    cargarProductos() {
        this.productoService.getAll().subscribe((data: any) => {
            this.productos = data;
        });
    }

    guardar() {
        this.productoService.create(this.nuevoProducto).subscribe(() => {
            alert('Producto guardado');

            this.nuevoProducto = {
                nombre: '',
                descripcion: '',
                precio: 0,
                stock: 0,
                proveedorId: null
            };

            this.cargarProductos(); // 🔥 refresca la lista
        });
    }

    eliminar(id: number) {
        this.productoService.delete(id).subscribe(() => {
            this.cargarProductos();
        });
    }
}