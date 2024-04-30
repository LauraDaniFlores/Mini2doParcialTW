import { Component } from '@angular/core';
import { Casa } from '../interface/casa';
import { CasaService } from '../service/casa.service';

@Component({
  selector: 'app-opc-lugares',
  standalone: true,
  imports: [],
  templateUrl: './opc-lugares.component.html',
  styleUrl: './opc-lugares.component.css'
})
export class OpcLugaresComponent {
  lugares:Casa[]=[];

  constructor(public miservicio: CasaService){
    console.log("constructor de heroes");
  }

  ngOnInit(): void{
    console.log("ngOnInit de Heroes");
    this.lugares = this.miservicio.getLugares();
    console.log(this.lugares);
  }

}
