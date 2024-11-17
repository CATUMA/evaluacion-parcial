import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-numeros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mostrar-numeros.component.html',
  styleUrl: './mostrar-numeros.component.css'
})
export class MostrarNumerosComponent {

  numerosPares: number[] = [];

  constructor() {
    this.obtenerNumerosPares();
  }

  obtenerNumerosPares(): void {
  
    for (let i = 20; i >= 10; i--) {
      if (i % 2 === 0) {
        this.numerosPares.push(i);
      }
    }
  }
}
