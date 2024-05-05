import { Routes } from '@angular/router';
import { OpcLugaresComponent } from './opc-lugares/opc-lugares.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
// import { MenuPrincipalComponent } from '../menu-principal/menu-principal.component';
import { DatosEquipoComponent } from './datos-equipo/datos-equipo.component';
import { AcercaNosotrosComponent } from './acerca-nosotros/acerca-nosotros.component';
import { ReservacionComponent } from './reservacion/reservacion.component';


export const routes: Routes = [
    // {path: 'principal', component: MenuPrincipalComponent},
    {path: 'reservaciones', component: ReservacionesComponent},
    {path: 'opc-lugares', component: OpcLugaresComponent}, 
    {path: 'datos-equipo', component: DatosEquipoComponent},
    {path: 'acerca-nosotros', component: AcercaNosotrosComponent},
    {path: 'casa/:id', component: ReservacionComponent},
    
    {path: '**', pathMatch: 'full', redirectTo: 'opc-lugares'}
];
