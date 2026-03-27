import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './registro.html'
})
export class Registro {

  user = { nombre: '', email: '', password: '' };

  constructor(private http: HttpClient) {}

  registrar() {
    this.http.post('http://localhost:8080/api/auth/register', this.user)
      .subscribe(() => {
        alert('Usuario registrado');
      });
  }
}