import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newacount',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './newacount.component.html',
  styleUrls: ['./newacount.component.css']
})
export class NewacountFormComponent {
  newAccountForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.newAccountForm = this.fb.group({
      correoElectronico: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      dni: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      terminos: [false, Validators.requiredTrue],
      autorizacion: [false],
      noSoyRobot: [false, Validators.requiredTrue]
    });
  }

  crearCuenta() {
    if (this.newAccountForm.valid) {
      console.log('Datos del formulario:', this.newAccountForm.value);
      // Aquí puedes enviar los datos del formulario a tu servicio backend
    } else {
      alert('Por favor, completa todos los campos requeridos y acepta los términos.');
    }
  }
}