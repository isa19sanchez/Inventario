import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../core/services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-productos.html',
})
export class FormProducto {
  producto: any = {};
  id: any;

  constructor(
    private service: ProductoService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    if (this.id) {
      this.service.getById(this.id).subscribe((data) => {
        this.producto = data;
      });
    }
  }

  guardar() {
    if (this.id) {
      this.service.update(this.id, this.producto).subscribe(() => {
        this.router.navigate(['/productos']);
      });
    } else {
      this.service.create(this.producto).subscribe(() => {
        this.router.navigate(['/productos']);
      });
    }
  }
}
