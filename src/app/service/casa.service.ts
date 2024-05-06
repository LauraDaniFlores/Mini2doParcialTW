import { Injectable } from '@angular/core';
import { Lugares } from '../lugares';
import { Casa } from '../interface/casa';

@Injectable({
  providedIn: 'root'
})
export class CasaService {

  private casa:Casa[]=Lugares;

  constructor() { }

  getLugares():Casa[]{
    return this.casa;
  }

  getUnLugar(posicion:number):Casa{
    return this.casa[posicion];
  }
  
}

