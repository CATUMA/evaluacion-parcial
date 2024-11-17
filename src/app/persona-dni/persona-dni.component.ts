import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-persona-dni',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './persona-dni.component.html',
  styleUrl: './persona-dni.component.css'
})
export class PersonaDniComponent {
  anioNacimiento: number | null = null;  // Año de nacimiento ingresado
  mensaje: string = '';  

  verificarDni(): void {
    if (this.anioNacimiento && this.anioNacimiento >= 1900 && this.anioNacimiento <= new Date().getFullYear()) {
      const edad = new Date().getFullYear() - this.anioNacimiento;
      this.mensaje = edad >= 18 ? `Tienes ${edad} años. Debes sacar tu DNI.` : `Tienes ${edad} años. No necesitas sacar tu DNI aún.`;
    } else {
      this.mensaje = 'Por favor, ingresa un año de nacimiento válido.';
    }
  }
}