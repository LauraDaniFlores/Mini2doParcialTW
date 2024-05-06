import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css'
})
export class EncabezadoComponent {
  showBurgerMenu: boolean | undefined;
  
  constructor(private router:Router) {}

  buscarUnCasa(estado:string){
    this.router.navigate(['/buscador', estado]);
  }






}
