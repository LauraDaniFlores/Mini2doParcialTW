import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DatosEquipoComponent } from './datos-equipo/datos-equipo.component';
import { AcercaNosotrosComponent } from './acerca-nosotros/acerca-nosotros.component';
import { DomseguroPipe } from './domseguro.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalendarModule, ColorPickerModule, DatosEquipoComponent, AcercaNosotrosComponent, DomseguroPipe ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KingAGS';

  color:string = '#fff'; 
  video:string = 'Gic_CtkJSjE';
}

