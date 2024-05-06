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

  searchUnCasa(estadocasa:string[]):number{
    let index = this.casa.findIndex(p => p.lugar === estadocasa);
    return index;
  }

  
}

