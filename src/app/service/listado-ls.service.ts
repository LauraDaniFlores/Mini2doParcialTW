import { Injectable } from '@angular/core';
import { Casa } from '../interface/casa';
import { Reservacion } from '../interface/reservaciones';
import { Lugares } from '../lugares';


@Injectable({
  providedIn: 'root'
})
export class ListadoLSService {
  listadoCasa!: Casa[]; 
  listadoReser!: Reservacion[]; 
  lista:Casa[]=Lugares; 


  constructor() { 
    this.listadoCasa = JSON.parse(localStorage.getItem("casas") || '[]'); 
    this.listadoReser = JSON.parse(localStorage.getItem("reservaciones") || '[]'); 
  }

  getLista(){
    return this.lista; 
  }
  
  imprimir(){
    localStorage.setItem('casas', JSON.stringify(this.lista));
    console.log(this.lista); 
  }
}
