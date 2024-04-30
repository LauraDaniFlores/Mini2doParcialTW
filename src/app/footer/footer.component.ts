import { Component } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { BadgeModule } from 'primeng/badge';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TabMenuModule, BadgeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  
}


