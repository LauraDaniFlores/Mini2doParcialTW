import { Component} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { Router, RouterModule } from '@angular/router';


@Component({
    selector: 'app-menu-principal',
    standalone: true,
    templateUrl: './menu-principal.component.html',
    // styleUrl: './menu-principal.component.css',
    styleUrls: ['./menu-principal.component.css'], 
    imports: [DialogModule, ButtonModule, RouterModule]
})
export class MenuPrincipalComponent{

  visible: boolean = false;
  visible2: boolean = false;
  visible3: boolean = false;
  visible4: boolean = false;

    showDialog() {
        this.visible = true;
    }

    showDialog2() {
      this.visible2 = true;
  }

  showDialog3() {
    this.visible3 = true;
}

showDialog4() {
  this.visible4 = true;
}



}



