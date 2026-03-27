import { Routes } from '@angular/router';
import { Productos } from './pages/producto/productos';
import { Proveedores } from './pages/proveedores/proveedores';
import { Movimientos } from './pages/movimientos/movimientos';
import { Categorias } from './pages/categorias/categorias';
import { Home } from './pages/home/home';
import { Login } from './auth/login/login';
import { Registro } from './auth/registro/registro';

export const routes: Routes = [
  { path: '', component: Home },

  { path: 'login', component: Login },
  { path: 'registro', component: Registro },

  { path: 'productos', component: Productos },
  { path: 'proveedores', component: Proveedores },
  { path: 'movimientos', component: Movimientos },
  { path: 'categorias', component: Categorias },
  { path: '', redirectTo: 'productos', pathMatch: 'full' }

];