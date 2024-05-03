import { Routes } from '@angular/router';
import { OpcLugaresComponent } from './opc-lugares/opc-lugares.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { MenuPrincipalComponent } from '../menu-principal/menu-principal.component';

export const routes: Routes = [
    {path: 'principal', component: MenuPrincipalComponent},
    {path: 'reservaciones', component: ReservacionesComponent},
    {path: 'opc-lugares', component: OpcLugaresComponent}, 
    // {path: 'datos-equipo', component: ReservacionesComponent},
    // {path: 'acerca-nosotros', component: OpcLugaresComponent}, 
    {path: '**', pathMatch: 'full', redirectTo: 'principal'}
];
