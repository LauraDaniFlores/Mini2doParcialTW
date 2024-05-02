import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OpcLugaresComponent } from './opc-lugares/opc-lugares.component';
import { ReservacionComponent } from './reservacion/reservacion.component';
import { CalendarModule } from 'primeng/calendar';
import { ColorPickerModule } from 'primeng/colorpicker';
import { FooterComponent } from './footer/footer.component';
import { EncabezadoComponent } from "../encabezado/encabezado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OpcLugaresComponent, ReservacionComponent, FooterComponent, EncabezadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'KingAGS';

  color:string = '#fff'; 
}

