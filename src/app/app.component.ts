import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { ColorPickerModule } from 'primeng/colorpicker';
import { EncabezadoComponent } from "../encabezado/encabezado.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CalendarModule, ColorPickerModule, EncabezadoComponent]
})
export class AppComponent {
  title = 'KingAGS';

  color:string = '#fff'; 
}

