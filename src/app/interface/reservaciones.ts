import { EmailValidator } from "@angular/forms";

export interface Reservacion{
    fechaI: Date;
    fechaF: Date;
    dias: number;
    nombre:string;
    telefono: string;
    correo: EmailValidator;
    precio: number;
}