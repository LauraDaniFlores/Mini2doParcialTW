import { Component } from '@angular/core';
import { ListadoLSService } from '../service/listado-ls.service';
import { Reservacion } from '../interface/reservaciones';
import { Casa } from '../interface/casa';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-reservaciones',
  standalone: true,
  imports: [ImageModule],
  templateUrl: './reservaciones.component.html',
  styleUrl: './reservaciones.component.css'
})
export class ReservacionesComponent {
  random:number = 0; 

  listadoCasa!: Casa[]; 
  listadoReser!: Reservacion[]; 

  constructor(private listadoLSService: ListadoLSService){}
  
  ngOnInit(){
    this.listadoCasa = this.listadoLSService.getLista(); 
    this.listadoLSService.imprimir(); 
  }

  randomNumber(){
    this.random = Math.floor(Math.random() * (3 - 0 + 1) + 0);
  }

  getImage(casa:Casa){
    this.randomNumber(); 
    // return casa.imagen[this.random]; 
    return casa.imagen[0];
  }
}
