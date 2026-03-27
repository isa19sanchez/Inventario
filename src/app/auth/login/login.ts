import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  user = { email: '', password: '' };

  constructor(private http: HttpClient) {}

  login() {
    this.http.post('http://localhost:8080/api/auth/login', this.user)
      .subscribe(res => {
        alert('Login exitoso');
      });
  }
}