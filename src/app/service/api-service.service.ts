import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  constructor(private http: HttpClient) {}
  
  retornar(){
    return this.http.get("https://gaia.inegi.org.mx/wscatgeo/mgee/").pipe(take(1)); 
  }
}
