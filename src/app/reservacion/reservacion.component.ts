import { CommonModule, Time } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Calendar, CalendarModule } from 'primeng/calendar';
import { Casa } from '../interface/casa';
import { CasaService } from '../service/casa.service';
import { GalleriaModule } from 'primeng/galleria';
import { ListadoLSService } from '../service/listado-ls.service';
import { Reservacion } from '../interface/reservaciones';
import { Lugares } from '../lugares';
import { Router } from '@angular/router';

import swal from'sweetalert2';
import 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { DisponibleComponent } from "../disponible/disponible.component";
// import {GMapModule} from 'primeng/gmap';

@Component({
    selector: 'app-reservacion',
    standalone: true,
    templateUrl: './reservacion.component.html',
    styleUrl: './reservacion.component.css',
    imports: [CalendarModule, CommonModule, FormsModule, RouterModule, GalleriaModule, DisponibleComponent]
})
export class ReservacionComponent {
  fecha!: Date[];
  hora!: Time;
  nombre: string="";
  email: string="";
  telefono: string="";

  alert: string='';
  confirmacion:boolean = false; 
  hoy: Date = new Date(); 

  ComprobarFecha(){
    console.log(this.fecha);
  }

  casa!:Casa;
  carrusel!:string[];

  reservaciones!: Reservacion;
  arrayReseActual: Reservacion[] = []; 

  // constructor(public miservicio: CasaService){
  //   this.casa = this.miservicio.getUnLugar(8);
  //   console.log(this.casa);
  //   this.carrusel = this.casa.imagen;
  //   // this.carrusel.splice(0, 1);
  //   console.log(this.carrusel);
  // }
  

  constructor(public casaService:CasaService, public activatedRoute: ActivatedRoute, private listadoLSService: ListadoLSService, private router: Router){
    this.activatedRoute.params.subscribe(params => {
      this.casa = this.casaService.getUnLugar(params['id']);
    })
    this.carrusel = this.casa.imagen;
  }

  ngOnInit(){
    this.reservaciones = this.listadoLSService.nuevaReserva();
  }

  nuevaReserva():void{
    this.listadoLSService.agregarReservacion(this.reservaciones); 
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

  validateFecha(fecha:Date []){
    if(fecha == undefined){
      return false; 
    }else{


      this.reservaciones.fechaI = new Date(this.fecha[0]); 
      this.reservaciones.fechaF = new Date(this.fecha[1]); 


      if(this.reservaciones.fechaF == null){
        // console.log("Esta vacio");
        if(this.comprobarDisponibiliad(this.reservaciones.fechaI, this.arrayReseActual, true)){
          return false; 
        }
      }
      if(this.comprobarDisponibiliad(this.reservaciones.fechaI, this.arrayReseActual, true) || this.comprobarDisponibiliad(this.reservaciones.fechaF, this.arrayReseActual, false)){
        // console.log("Esta reservada");
        return false; 
      }
      else if(this.listadoLSService.comprobarFecha(this.reservaciones.fechaI, new Date(), false)){        
        // console.log("Es una fecha anterior");
        return false; 
      }
    }
    return true; 
  }

  comprobarDisponibiliad(fecha: Date, fechas: Reservacion[], flag:boolean):boolean{
    for(var i of fechas){
      if(flag){
        if(!this.listadoLSService.comprobarFecha(fecha, i.fechaI, false) && this.listadoLSService.comprobarFecha(fecha, i.fechaF, true)){
          return true; 
        }
      }else{
        if(this.listadoLSService.comprobarFecha(fecha, i.fechaI, true) && !this.listadoLSService.comprobarFecha(fecha, i.fechaF, false)){
          return true; 
        }
      }
    }
    console.log("No se entrelapan"); 
    return false;
  }

  daysbetween(){
    let Difference_In_Time =
    this.fecha[1].getTime() - this.fecha[0].getTime();
 
    let Difference_In_Days =
        Math.round
            (Difference_In_Time / (1000 * 3600 * 24));
    return Difference_In_Days;        
  }
  agregarCampos(){
    this.reservaciones.dias = this.daysbetween()+1; 
    this.reservaciones.precio = (this.casa.precio)*(this.reservaciones.dias);
    this.reservaciones.idCasa = this.casa.id; 
  }
  
  validateInfo(){
    if( this.validateFecha(this.fecha)){
      if(this.validateEmail(this.reservaciones.correo) && this.validateName(this.reservaciones.nombre) && this.validatePhone(this.reservaciones.telefono)){
        this.agregarCampos(); 
        this.nuevaReserva();
        this.limpiarCampos();
        // console.log(this.reservaciones); 
  
        swal.fire({
          title: "Reservación completada",
          icon: "success",
          showDenyButton: true,
          confirmButtonText: "Serguir explorando",
          denyButtonText: "Ok"
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.router.navigate((['/', 'opc-lugares']));
          } 
        });
      }else{
        swal.fire({
          title: "Información no válida",
          text: "Compruebe la información dada",
          icon: "error"
        });
      }
    }else{
      swal.fire({
        title: "Información no válida",
        text: "Fechas Ocupadas",
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
  
  casasActuales(rese: Reservacion[]){
    for(var re of rese){
      if(re.idCasa == this.casa.id){
        this.arrayReseActual.push(re);
      }
    }
  }

  limpiarCampos(){
    this.reservaciones = this.listadoLSService.nuevaReserva();
    this.fecha[0]= new Date();
    this.fecha[0]= new Date();
  }

  confirmacionInput(){
    this.casasActuales(this.listadoLSService.getlistaResers()); 
    console.log(this.arrayReseActual);
    for(var c of this.arrayReseActual){
      if(this.listadoLSService.comprobarFecha(new Date(), c.fechaI, true) && !this.listadoLSService.comprobarFecha(new Date(), c.fechaF, false)){
        return false; 
      }
    }
    return true; 
  }

}

interface imagenes{
  imagen: string;
}

