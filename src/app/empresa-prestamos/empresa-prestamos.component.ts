import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empresa-prestamos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './empresa-prestamos.component.html',
  styleUrl: './empresa-prestamos.component.css'
})
export class EmpresaPrestamosComponent {
  montoPrestamo: number = 0;  
  cuotas: number = 0;         
  deudaTotal: number = 0;     
  montoPorCuota: number = 0;  

  calcularPrestamo() {
    if (this.montoPrestamo > 5000) {
      this.cuotas = 3;
      this.deudaTotal = this.montoPrestamo * 1.10;  
    } else if (this.montoPrestamo < 1000) {
      this.cuotas = 1;
      this.deudaTotal = this.montoPrestamo * 1.12;  
    } else if (this.montoPrestamo >= 2000 && this.montoPrestamo <= 3000) {
      this.cuotas = 2;
      this.deudaTotal = this.montoPrestamo * 1.12;  
    } else {
      this.cuotas = 5;
      this.deudaTotal = this.montoPrestamo * (this.montoPrestamo < 4000 ? 1.12 : 1.10);  
    }

    this.montoPorCuota = this.deudaTotal / this.cuotas;  
  }
}