import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

interface Credentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(credentials: Credentials): Observable<any> {
    // Simulación de la lógica de autenticación
    if (credentials.username === 'usuario' && credentials.password === 'contraseña') {
      // Simula una respuesta exitosa después de un pequeño retraso
      return of({ token: 'fake-jwt-token' }).pipe(delay(1000));
    } else {
      // Simula un error después de un pequeño retraso
      return throwError(() => new Error('Credenciales inválidas')).pipe(delay(1000));
    }
  }

  // Puedes agregar aquí otros métodos como logout, isAuthenticated, etc.
}