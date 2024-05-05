import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OpcLugaresComponent } from './opc-lugares/opc-lugares.component';
import { CalendarModule } from 'primeng/calendar';
import { ColorPickerModule } from 'primeng/colorpicker';
import { FooterComponent } from './footer/footer.component';
import { ReservacionesComponent } from "./reservaciones/reservaciones.component";
import { DatosEquipoComponent } from "./datos-equipo/datos-equipo.component";
import { AcercaNosotrosComponent } from './acerca-nosotros/acerca-nosotros.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, OpcLugaresComponent, FooterComponent, ReservacionesComponent, AcercaNosotrosComponent, DatosEquipoComponent, EncabezadoComponent, MenuPrincipalComponent]
})

export class AppComponent {
  title = 'KingAGS';

  color:string = '#fff'; 

  

  
}