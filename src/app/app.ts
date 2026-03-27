import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <nav class="navbar navbar-dark bg-dark px-3">
      <a class="navbar-brand">Inventario</a>
      <a href="/productos" class="btn btn-light">Productos</a>
    </nav>

    <router-outlet></router-outlet>
  `
})
export class App {}