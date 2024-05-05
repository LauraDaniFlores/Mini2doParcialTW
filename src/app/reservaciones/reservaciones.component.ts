import { Component } from '@angular/core';
import { ListadoLSService } from '../service/listado-ls.service';
import { Reservacion } from '../interface/reservaciones';
import { Casa } from '../interface/casa';
import { ImageModule } from 'primeng/image';
import { Lugares } from '../lugares';

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
  lista:Casa[] = Lugares; 
  today = new Date();

  constructor(private listadoLSService: ListadoLSService){}
  
  ngOnInit(){
    this.listadoCasa = this.listadoLSService.getLista(); 
    this.listadoReser = this.listadoLSService.getlistaResers(); 
  }

  randomNumber(){
    this.random = Math.floor(Math.random() * (3 - 0 + 1) + 0);
  }

  getImage(casa:Casa){
    this.randomNumber(); 
    // return casa.imagen[this.random]; 
    return casa.imagen[0];
  }
  fechaAnterior(fechaI: Date){
    return this.comprobarFecha(fechaI);
  }
  comprobarFecha(fecha: Date){
    if(fecha.getFullYear() < this.today.getFullYear()){
      return true; 
    }else if(fecha.getFullYear() > this.today.getFullYear()){
      return false;
    }else if(fecha.getFullYear() == this.today.getFullYear()){
      if(fecha.getMonth() < this.today.getMonth()){
        return true;
      }else if(fecha.getMonth() > this.today.getMonth()){
        return false; 
      }else if(fecha.getMonth() == this.today.getMonth()){
        if(fecha.getDate() < this.today.getDate()){
          return true; 
        }else if(fecha.getDate() > this.today.getDate()){
          return false; 
        }else if(fecha.getDate() == this.today.getDate()){
          return true; 
        }
      }
    }
    return true; 
  }



  sumarMonth(num: number){
    return num+1; 
  }
  ponerCeros(num: number){
    if(num <10){
      return "0"+num; 
    }
    return num; 
  }
}
