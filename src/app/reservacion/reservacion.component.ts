import { CommonModule, Time } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Calendar, CalendarModule } from 'primeng/calendar';
import { Casa } from '../interface/casa';
import { CasaService } from '../service/casa.service';
import { GalleriaModule } from 'primeng/galleria';
// import { GMapModule } from 'primeng/gmap';

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

  ComprobarFecha(){
    console.log(this.fecha);
  }

  casa!:Casa;
  carrusel!:string[];

  constructor(public miservicio: CasaService){
    this.casa = this.miservicio.getUnLugar(3);
    console.log(this.casa);
    this.carrusel = this.casa.imagen;
    // this.casa.splice(0, 1);    
    console.log(this.carrusel);
  }
  

  // constructor(public casaService:CasaService, public activatedRoute: ActivatedRoute){
  //   this.activatedRoute.params.subscribe(params => {
  //     this.casa = this.casaService.getUnLugar(params['id']);
  //   })
  // }
  
}

interface imagenes{
  imagen: string;
}