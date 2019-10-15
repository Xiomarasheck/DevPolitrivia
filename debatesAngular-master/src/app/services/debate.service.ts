import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Debates } from '../Model/debate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DebateService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:61568/api/debates';
  /* static instance:UserRegisterService; */

  constructor(private http: HttpClient) 
  { 
   /*  UserRegisterService.instance = this; */
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public add(newDebate) {
    return this.http.post(this.accessPointUrl,newDebate, {headers: this.headers});
  }
  
  public getAll(id):Observable<Debates>
  {
    return this.http.get<Debates>(this.accessPointUrl+"?idUsuario="+id,{headers: this.headers}); 
  } 

}
