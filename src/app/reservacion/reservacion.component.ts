import { CommonModule, Time } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Calendar, CalendarModule } from 'primeng/calendar';
import { Casa } from '../interface/casa';
import { CasaService } from '../service/casa.service';
import { GalleriaModule } from 'primeng/galleria';
import swal from'sweetalert2';
import 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
// import {GMapModule} from 'primeng/gmap';

@Component({
  selector: 'app-reservacion',
  standalone: true,
  imports: [CalendarModule, CommonModule, FormsModule,RouterModule, GalleriaModule],
  templateUrl: './reservacion.component.html',
  styleUrl: './reservacion.component.css'
})
export class ReservacionComponent {
  fecha!: Date[];
  hora!: Time;
  nombre: string="";
  email: string="";
  telefono: string="";

  alert: string='';

  ComprobarFecha(){
    console.log(this.fecha);
  }

  casa!:Casa;
  carrusel!:string[];

  // constructor(public miservicio: CasaService){
  //   this.casa = this.miservicio.getUnLugar(8);
  //   console.log(this.casa);
  //   this.carrusel = this.casa.imagen;
  //   // this.carrusel.splice(0, 1);
  //   console.log(this.carrusel);
  // }
  

  constructor(public casaService:CasaService, public activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe(params => {
      this.casa = this.casaService.getUnLugar(params['id']);
    })
    this.carrusel = this.casa.imagen;
  }

validateEmail(email:string) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

validateName(nombre:string){
  return (String(nombre)
  .match(/^[a-zA-Z ]+$/ 
  ) && nombre.length >2)

}

validatePhone(telefono:string){
  return String(telefono)
    .toLowerCase()
    .match(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    );
}

  validateFecha(fecha:Date){

  }

  validateInfo(){
    if(this.validateEmail(this.email) && this.validateName(this.nombre) && this.validatePhone(this.telefono)){
      swal.fire({
        title: "Reservación completada",
        icon: "success"
      });
    }else{
      swal.fire({
        title: "Información no válida",
        text: "Compruebe la información dada",
        icon: "error"
      });
    }
  }

  getClass (event: any, n: number){
    console.log("Hola");
    if(n==0){
      if(this.validateName(this.nombre)){
        return 'correct';
      }
    }else if(n==1){
      if(this.validateEmail(this.email)){
        console.log('ver');
        return 'correct';
      }
    }else if(n==2){
      if(this.validatePhone(this.telefono)){
        console.log('ver');
        return 'correct';
      }
    }
    return 'wrong';
  }
  
}

interface imagenes{
  imagen: string;
}