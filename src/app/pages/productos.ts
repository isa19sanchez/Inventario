import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../services/producto.service';

@Component({
    selector: 'app-productos',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './productos.html',
    styleUrl: './productos.css'
})
export class ProductosComponent {

    productos: any[] = []

    nuevoProducto: any = {
        nombre: '',
        descripcion: '',
        precio: 0,
        stock: 0
    }

    constructor(private productoService: ProductoService) { }

    ngOnInit() {
        this.cargarProductos()
    }

    cargarProductos() {
        this.productoService.listar().subscribe((data: any) => {
            this.productos = data
        })
    }

    guardar() {
        this.productoService.crear(this.nuevoProducto).subscribe(() => {
            this.cargarProductos()
        })
    }

    eliminar(id: number) {
        this.productoService.eliminar(id).subscribe(() => {
            this.cargarProductos()
        })
    }

}