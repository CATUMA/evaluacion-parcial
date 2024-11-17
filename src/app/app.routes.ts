import { Routes } from '@angular/router';
import { AlmacenDescuentoComponent } from './almacen-descuento/almacen-descuento.component';
import { EmpresaPrestamosComponent } from './empresa-prestamos/empresa-prestamos.component';
import { MostrarNumerosComponent } from './mostrar-numeros/mostrar-numeros.component';
import { PersonaDniComponent } from './persona-dni/persona-dni.component';

export const routes: Routes = [
    {path: "descuento", component: AlmacenDescuentoComponent},
    {path: "prestamo", component: EmpresaPrestamosComponent},
    {path: "numero", component: MostrarNumerosComponent},
    {path: "dni", component: PersonaDniComponent}
];
