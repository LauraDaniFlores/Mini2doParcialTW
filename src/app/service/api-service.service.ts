import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { HttpClient } from '@angular/common/http';

 
@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  // https://turismo.free.beeceptor.com/todos
  urlAPI: string = "https://turismo.free.beeceptor.com/todos";

  constructor(private http: HttpClient) {};
  
  retornar(){
    return this.http.get(this.urlAPI).pipe(take(1),); 
  }
}
