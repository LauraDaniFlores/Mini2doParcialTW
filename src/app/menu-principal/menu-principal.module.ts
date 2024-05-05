import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../AppComponent';
import { MenuPrincipalComponent } from './menu-principal.component';
import { BrowserModule } from '@angular/platform-browser';
import {DialogModule} from 'primeng/dialog';


import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    // MenuPrincipalComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    DialogModule
  ],
  providers: [],
  // bootstrap: [MenuPrincipalComponent],
  
})
export class MenuPrincipalModule { }
