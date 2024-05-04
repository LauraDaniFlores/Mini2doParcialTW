import { Component } from '@angular/core';
import { DomseguroPipe } from '../domseguro.pipe';

@Component({
  selector: 'app-acerca-nosotros',
  standalone: true,
  imports: [DomseguroPipe],
  templateUrl: './acerca-nosotros.component.html',
  styleUrl: './acerca-nosotros.component.css'
})
export class AcercaNosotrosComponent {
  video:string="Gic_CtkJSjE";

}
