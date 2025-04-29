import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router:Router
  ) 
  {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Iniciar sesión con:', this.loginForm.value);
      // Aquí se integraría el authService
      this.router.navigate(['/aboutus']);
    }
  }

  loginWithGoogle(): void {
    console.log('Iniciar sesión con Google');
  }
} 