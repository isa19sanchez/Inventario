import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './categorias.html',
  styleUrls: ['./categorias.css']
})
export class Categorias {

  api = 'http://localhost:8080/api/categorias';

  categorias: any[] = [];

  nuevaCategoria: any = {
    nombre: '',
    descripcion: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    this.http.get<any[]>(this.api).subscribe(data => {
      this.categorias = data;
    });
  }

  guardar() {
    this.http.post(this.api, this.nuevaCategoria).subscribe(() => {
      alert('Categoría guardada');
      this.nuevaCategoria = { nombre: '', descripcion: '' };
      this.cargar();
    });
  }

  eliminar(id: number) {
    this.http.delete(`${this.api}/${id}`).subscribe(() => {
      this.cargar();
    });
  }
}