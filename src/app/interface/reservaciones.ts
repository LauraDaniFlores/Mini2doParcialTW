import { Time } from "@angular/common";
import { EmailValidator } from "@angular/forms";

export interface Reservacion{
    fechaI: Date;
    fechaF: Date;
    hora: string; 
    dias: number;
    nombre:string;
    telefono: string;
    correo: string;
    precio: number;
    idR: number; 
    idCasa: number; 
}