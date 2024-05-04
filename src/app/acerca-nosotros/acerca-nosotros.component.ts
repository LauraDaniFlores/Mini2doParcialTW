import { Component } from '@angular/core';
import { DomseguroPipe } from '../domseguro.pipe';
import { TableModule } from 'primeng/table';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-acerca-nosotros',
  standalone: true,
  imports: [DomseguroPipe, TableModule],
  templateUrl: './acerca-nosotros.component.html',
  styleUrl: './acerca-nosotros.component.css'
})
export class AcercaNosotrosComponent {
  video:string="Gic_CtkJSjE";

  array:any = []; 

  constructor(public apiServiceService: ApiServiceService){}

  recuperarDatos():void{
    console.log("entre"); 

    this.apiServiceService.retornar().subscribe({
      next: this.successRequest.bind(this), 
      error: (err) => {console.log(err)}
    });
  }

  successRequest(data:any){
    console.log(data); 
    this.array = data.datos; 
    console.log(this.array); 
  }
}
