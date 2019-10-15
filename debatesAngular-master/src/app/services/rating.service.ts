import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:61568/api/rating';
  /* static instance:UserRegisterService; */
  private loginState = false;
  constructor(private http: HttpClient) 
  { 
   /*  UserRegisterService.instance = this; */
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }
  public add(rating) {
    return this.http.post(this.accessPointUrl,rating, {headers: this.headers});
  }
}
