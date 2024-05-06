import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { OpcLugaresComponent } from '../opc-lugares/opc-lugares.component';
import { Casa } from '../interface/casa';
import { CasaService } from '../service/casa.service';
import { ListadoLSService } from '../service/listado-ls.service';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [OpcLugaresComponent, RouterModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {


  flag:boolean = false;

  estadoc:string="";
  indice:number=0;
  referencias!:Casa[];

  constructor(private casaService: CasaService, private activatedRoute:ActivatedRoute, private listadoService: ListadoLSService){
    this.activatedRoute.params.subscribe(params =>{
      this.estadoc=params['estado'];
     this.referencias = this.listadoService.buscarCasas(this.estadoc);
     console.log(this.referencias);

     if(this.referencias.length === 0){
        this.flag = false;
        console.log(this.flag);

     }else{

      this.flag = true;
      console.log(this.flag);
     }

    })
  }

}
