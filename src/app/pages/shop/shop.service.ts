import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private carrito: any[] = [];

  constructor() { }

  agregarProducto(producto: any) {
    this.carrito.push(producto);
  }

  obtenerCarrito() {
    return this.carrito;
  }

  vaciarCarrito() {
    this.carrito = [];
  }
}
