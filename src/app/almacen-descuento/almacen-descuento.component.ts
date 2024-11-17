import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-almacen-descuento',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './almacen-descuento.component.html',
  styleUrl: './almacen-descuento.component.css'
})
export class AlmacenDescuentoComponent {
  cantidad: number = 0; 
  precio: number = 0; 
  total: number = 0; 
  totalConDescuento: number = 0; 

  calcularDescuento() {
    
    this.total = this.cantidad * this.precio;    
    this.totalConDescuento = this.total > 200 ? this.total * 0.8 : this.total;
  }
}