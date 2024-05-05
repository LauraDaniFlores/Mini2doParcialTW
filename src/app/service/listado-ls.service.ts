import { Injectable } from '@angular/core';
import { Casa } from '../interface/casa';
import { Reservacion } from '../interface/reservaciones';
import { Lugares } from '../lugares';


@Injectable({
  providedIn: 'root'
})
export class ListadoLSService {
  today = new Date();
  antes:boolean = false;
  listadoResers!: Reservacion[]; 
  lista:Casa[]=Lugares; 
  li: Reservacion[] = [{
    fechaI:new Date(2022, 11, 22),
    fechaF:new Date(2022, 11, 25),
    hora: '07:00',
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
    fechaF:new Date(2023, 11, 3),
    hora: '07:00',
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
  }

  getLista(){
    return this.lista; 
  }
  getlistaResers(){
    return this.li; 
  }


  agregarReservacion(reserv: Reservacion){
    this.listadoResers.push(reserv);
    // localStorage.setItem("reservaciones", JSON.stringify(this.listadoResers)); 
  }

  nuevaReserva(): Reservacion{
    return {
      fechaI: new Date("0000, 00, 00"),
      fechaF:new Date("0000, 00, 00"),
      hora: '',
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



}
