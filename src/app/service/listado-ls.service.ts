import { Injectable } from '@angular/core';
import { Casa } from '../interface/casa';
import { Reservacion } from '../interface/reservaciones';
import { Lugares } from '../lugares';
import { CasaService } from './casa.service';
import { FormControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ListadoLSService {
  today = new Date();
  antes:boolean = false;
  listadoResers!: Reservacion[]; 
  lista:Casa[]=Lugares; 

  busqueda:Casa[] = [];

  

  
  
  li: Reservacion[] = [{
    fechaI:new Date(2022, 11, 22),
    fechaF:new Date(2022, 11, 25),
    hora: new Date(2023, 11, 3),
    dias: 3,
    nombre: 'Laura',
    telefono: '3461150701',
    correo: 'danila@gmail.com',
    precio: 945,
    idR: 0,
    idCasa: 0
  }, 
  {
    fechaI: new Date(2023, 11, 1),
    fechaF: new Date(2023, 11, 3),
    hora: new Date(2023, 11, 3),
    dias: 3,
    nombre: 'Laura',
    telefono: '3461150701',
    correo: 'danila@gmail.com',
    precio: 945,
    idR: 0,
    idCasa: 1
  }]


  constructor() { 
    this.listadoResers = JSON.parse(localStorage.getItem("reservaciones") || '[]'); 
    this.convertirDate();
  }

  convertirDate(){
    for(var fecha of this.listadoResers){
      fecha.fechaI = new Date(fecha.fechaI);
      fecha.fechaF = new Date(fecha.fechaF);
      fecha.hora = new Date(fecha.hora);
    }
  }
  getLista(){
    return this.lista; 
  }

  //Lista de casas disponibles
  getlistaResers(){
    return this.listadoResers; 
  }


  agregarReservacion(reserv: Reservacion){
    this.listadoResers.push(reserv);
    console.log(reserv);
    console.log(this.listadoResers); 
    localStorage.setItem("reservaciones", JSON.stringify(this.listadoResers)); 
  }

  nuevaReserva(): Reservacion{
    return {
      fechaI: new Date(),
      fechaF: new Date(),
      hora: new Date(),
      dias: 0,
      nombre: '',
      telefono: '',
      correo: '',
      precio: 0,
      idR: this.listadoResers.length,
      idCasa: 0
    }
  }

  
  imprimir(){
    localStorage.setItem('reservaciones', JSON.stringify(this.li));
    localStorage.setItem('casas', JSON.stringify(this.lista));
  }

  comprobarFecha(fecha: Date, fecha2: Date, flag: boolean){
    if(fecha.getFullYear() < fecha2.getFullYear()){
      return true; 
    }else if(fecha.getFullYear() > fecha2.getFullYear()){
      return false;
    }else if(fecha.getFullYear() == fecha2.getFullYear()){
      if(fecha.getMonth() < fecha2.getMonth()){
        return true;
      }else if(fecha.getMonth() > fecha2.getMonth()){
        return false; 
      }else if(fecha.getMonth() == fecha2.getMonth()){
        if(fecha.getDate() < fecha2.getDate()){
          console.log(fecha + " < " + fecha2);
          return true; 
        }else if(fecha.getDate() > fecha2.getDate()){
          console.log(fecha + " > " + fecha2);
          return false; 
        }else if(fecha.getDate() == fecha2.getDate()){
          if(!flag){
            console.log(fecha + " > " + fecha2);
            return false;
          }else{
            console.log(fecha + " < " + fecha2);
            return true; 
          }
        }
      }
    }
    return false; 
  }


  buscarCasas(estado: string){
    this.busqueda = [];
    var flag:boolean =false;

  for(var i of this.lista){
     for(var j of i.lugar){
       if(estado == j){
        console.log(i);
        flag=true;
       }
     }
     if(flag){
      this.busqueda.push(i);
      flag = false;
     }
    }
    return this.busqueda;
  }

 
  

 



}
