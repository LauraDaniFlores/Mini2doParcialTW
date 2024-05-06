import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-disponible',
  standalone: true,
  imports: [],
  templateUrl: './disponible.component.html',
  styleUrl: './disponible.component.css'
})
export class DisponibleComponent {
  @Input() hoy: boolean = false;
}
