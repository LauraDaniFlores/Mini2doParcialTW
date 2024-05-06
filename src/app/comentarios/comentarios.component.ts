import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [FormsModule, ComentariosComponent],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {
  comentarios: string[] = ['Excelente servicio', 'Los anfitriones siempre son muy atentos y responden nuestras preguntas', 'Muy bonitas casas', 'Las vistas son preciosas', 'Muy buen precio', 'Las casas siempre estan limpias'];
  
  num:number[]= this.randomNumber();
  comentario: string[] = [this.comentarios[this.num[0]], this.comentarios[this.num[1]], this.comentarios[this.num[2]]];

  @Output() emitir = new EventEmitter<string[]>();


  onEmitir(){
    this.emitir.emit(this.comentario);
  }

  randomNumber(){
    let num =[0,1,2,3,4,5];
    num = this.shuffle(num);
    return num.splice(3, 3);
  }

  shuffle(a:number[]) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
