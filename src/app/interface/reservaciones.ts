import { Time } from "@angular/common";
import { EmailValidator } from "@angular/forms";

export interface Reservacion{
    [x: string]: any;
    fechaI: Date;
    fechaF: Date;
    hora: Date; 
    dias: number;
    nombre:string;
    telefono: string;
    correo: string;
    precio: number;
    idR: number; 
    idCasa: number; 
}