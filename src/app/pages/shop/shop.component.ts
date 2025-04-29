import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ShopService } from './shop.service';  


@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],

  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  productos = [
    { id: 1, nombre: 'Producto 1', precio: 100, cantidad: 1 },
    { id: 2, nombre: 'Producto 2', precio: 200, cantidad: 1 },
    { id: 3, nombre: 'Producto 3', precio: 300, cantidad: 1 }
  ];

  agregarProducto(id: number) {
    const producto = this.productos.find(p => p.id === id);
    if (producto) {
      producto.cantidad++;
    }
  }

  eliminarProducto(id: number) {
    const producto = this.productos.find(p => p.id === id);
    if (producto && producto.cantidad > 1) {
      producto.cantidad--;
    } else {
      this.productos = this.productos.filter(p => p.id !== id);
    }
  }

  obtenerTotal() {
    return this.productos.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  }
  constructor(private carritoService: ShopService) {}

  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto);
  }
}
