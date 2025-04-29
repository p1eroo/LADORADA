import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

@Component({
  selector: 'app-shop-pago',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule], // Agrega HttpClientModule aquí
  templateUrl: './shop-pago.component.html',
  styleUrl: './shop-pago.component.css'
})
export class ShopPagoComponent {
  ruc = '';
  razonSocial = '';
  numeroTarjeta = '';
  expiracion = '';
  ccv = '';
  cupon = '';

  constructor(private http: HttpClient) {}

  guardarFactura() {
    const data = { ruc: this.ruc, razonSocial: this.razonSocial };
    this.http.post('/api/factura', data).subscribe(response => {
      alert('Factura guardada');
    });
  }

  pagar() {
    const data = {
      ruc: this.ruc,
      razonSocial: this.razonSocial,
      tarjeta: this.numeroTarjeta,
      expiracion: this.expiracion,
      ccv: this.ccv,
      cupon: this.cupon
    };
    this.http.post('/api/pago', data).subscribe(response => {
      alert('Pago realizado con éxito');
    });
  }

  agregarTarjeta() {
    alert('Tarjeta agregada');
  }

  aplicarCupon() {
    this.http.post('/api/cupon', { cupon: this.cupon }).subscribe(response => {
      alert('Cupón aplicado');
    });
  }
}