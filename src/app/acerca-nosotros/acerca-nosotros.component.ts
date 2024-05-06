import { Component } from '@angular/core';
import { DomseguroPipe } from '../domseguro.pipe';
import { TableModule } from 'primeng/table';
import { ApiServiceService } from '../service/api-service.service';
import { ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Dato } from '../interface/datos';
import { ComentariosComponent } from '../comentarios/comentarios.component';


@Component({
  selector: 'app-acerca-nosotros',
  standalone: true,
  imports: [DomseguroPipe, TableModule, ImageModule, CommonModule, RouterOutlet, ComentariosComponent],
  templateUrl: './acerca-nosotros.component.html',
  styleUrl: './acerca-nosotros.component.css'
})
export class AcercaNosotrosComponent {
  video:string="Gic_CtkJSjE";
  comment:string[] = [];

  array:Dato[] =[]; 

  constructor(public apiService: ApiServiceService){}

  ngOnInit(){
    console.log("En este instante el componente ha cargado");
    this.recuperarDatos();
  }

  recuperarDatos():void{
    console.log("entre"); 

    this.apiService.retornar().subscribe({
      next: this.successRequest.bind(this), 
      error: (err) => {console.log(err)}
    });
  }
  
  successRequest(data:any): void{
    console.log(data); 
    this.array = data.datos; 
    console.log(this.array); 
  }

  EscogerComentarios(comentario:string[]){
    console.log(comentario);
    this.comment = comentario;
  }
}
