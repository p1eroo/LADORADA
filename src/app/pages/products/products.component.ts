import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  
  styleUrl: './products.component.css'
})
 export class ProductsComponent {
  constructor(private router: Router) {}  
  productos = [
    {
      id: 1,
      cantidad: 1,
      nombre: 'Filetes de Baby Paiche',
      corte: 'Corte selecto',
      precio: 25.00,
      imagen: 'img/filete.png',
      descripcion: ' El filete de Baby Paiche es un corte selecto que conserva todas las cualidades excepcionales de este Rey del Amazonas. Su carne blanca, firme y de sabor delicado se presenta en un formato versatil y fácil de cocinar, ideal para aquellos que buscan una opción saludable y gourmet. Cada filete es cuidadosamente seleccionado y empacado para garantizar su fresacura y calidad, llevando a tu mesa una experiencia culinaria única y sostenible. ',
      caracteristicas: ['Alto contenido de proteinas', 'Rico en omega 3,6 y 9', 'Bajo contenido de grasas', 'Fuente de vitaminas y minerales'],
      certificaciones: [
        { imagen: 'img/certificacion1.png' },
        { imagen: 'img/certificacion2.png' }
      ]
    },
    {
      id: 2,
      cantidad: 1,
      nombre: 'Medallones de Baby Paiche',
      corte: 'Corte Darnes',
      precio: 25.00,
      imagen: 'img/medallones.png',
      descripcion: 'Los medallones de baby paiche son un corte selecto que conserva todas las cualidades excepcionales de este Rey del Amazonas. Su carne blanca, firme y de sabor delicado se presenta en un formato versatil y fácil de cocinar, ideal para aquellos que buscan una opción saludable y gourmet. Cada filete es cuidadosamente seleccionado y empacado para garantizar su fresacura y calidad, llevando a tu mesa una experiencia culinaria única y sostenible.',
      caracteristicas: ['Alto contenido de proteinas', 'Rico en omega 3,6 y 9', 'Bajo contenido de grasas', 'Fuente de vitaminas y minerales'],
      certificaciones: [
        { imagen: 'img/certificacion1.png' },
        { imagen: 'img/certificacion2.png' }
      ]
    },
    
    {
      id: 3,
      cantidad: 1,
      nombre: 'Embutidos de Baby Paiche',
      corte: 'Corte Darnes',
      precio: 22.00,
      imagen: 'img/embutidos.png',
      descripcion: 'Los embutidos de baby paiche son un corte selecto que conserva todas las cualidades excepcionales de este Rey del Amazonas. Su carne blanca, firme y de sabor delicado se presenta en un formato versatil y fácil de cocinar, ideal para aquellos que buscan una opción saludable y gourmet. Cada filete es cuidadosamente seleccionado y empacado para garantizar su fresacura y calidad, llevando a tu mesa una experiencia culinaria única y sostenible. ',
      caracteristicas: ['Alto contenido de proteinas', 'Rico en omega 3,6 y 9', 'Bajo contenido de grasas', 'Fuente de vitaminas y minerales'],
      certificaciones: [
        { imagen: 'img/certificacion1.png' },
        { imagen: 'img/certificacion2.png' }
      ]
    },
    {
      id: 4,
      cantidad: 1,
      nombre: 'Hamburguesas de Baby Paiche',
      corte: 'Corte selecto',
      precio: 30.00,
      imagen: 'img/hamburguesa.png',
      descripcion: 'Un festín AmazóniLas hamburguesas de baby paiche son un corte selecto que conserva todas las cualidades excepcionales de este Rey del Amazonas. Su carne blanca, firme y de sabor delicado se presenta en un formato versatil y fácil de cocinar, ideal para aquellos que buscan una opción saludable y gourmet. Cada filete es cuidadosamente seleccionado y empacado para garantizar su fresacura y calidad, llevando a tu mesa una experiencia culinaria única y sostenible. co en cada bocado',
      caracteristicas: ['Alto contenido de proteinas', 'Rico en omega 3,6 y 9', 'Bajo contenido de grasas', 'Fuente de vitaminas y minerales'],
      certificaciones: [
        { imagen: 'img/certificacion1.png' },
        { imagen: 'img/certificacion2.png' }
      ]
    }
    
  ];
   
  agregarAlCarrito(producto: any) {
    this.router.navigate(['/checkout']);
    console.log('Producto agregado al carrito:', producto);
  } 
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
}
