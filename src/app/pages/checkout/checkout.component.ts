import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Importa FormsModule
import { Router } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule], 
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent {
    
  

  addressForm: FormGroup;
  facturaForm: FormGroup;
  termsAccepted = false;
  subtotal = 30.00;

  constructor(private fb: FormBuilder,private router: Router) {
    this.addressForm = this.fb.group({
      departamento: ['', Validators.required],
      provincia: ['', Validators.required],
      distrito: ['', Validators.required],
      calle: ['', Validators.required],
      numero: ['', Validators.required]
    });

    this.facturaForm = this.fb.group({
      ruc: ['', Validators.required],
      razonSocial: ['', Validators.required]
    }); 
  }

  get total(): number {
    return this.addressForm.valid ? this.subtotal : this.subtotal;
  }

  
  pagar(): void {
    if (this.addressForm.valid && this.facturaForm.valid && this.termsAccepted) {
      this.router.navigate(['/shoppago']);

      console.log('Procesar pago');
    } else {
      alert('Completa todos los campos requeridos y acepta los términos.');
    }
  }

  guardar(): void {
    console.log('Datos guardados');
  }
}