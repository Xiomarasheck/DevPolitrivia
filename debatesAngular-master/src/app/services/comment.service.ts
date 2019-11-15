import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../Model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService 
{
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:61568/api/comment';
  /* static instance:UserRegisterService; */

  constructor(private http: HttpClient) 
  { 
   /*  UserRegisterService.instance = this; */
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public add(newComment) {
    return this.http.post(this.accessPointUrl,newComment, {headers: this.headers});
  }
  
  public getComments(idDebate):Observable<Comment>
  {
    return this.http.get<Comment>(this.accessPointUrl+"/getComment/"+idDebate,{headers: this.headers}); 
  } 
}
