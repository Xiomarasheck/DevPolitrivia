import { Inject,Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { User } from '../Model/user';
import { Menu } from '../Model/menu';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:61568/api/user';
  /* static instance:UserRegisterService; */
  private loginState = false;


  constructor(private http: HttpClient,private currentUser:User,private userRol:Menu,@Inject(SESSION_STORAGE) private storage: WebStorageService) 
  { 
   /*  UserRegisterService.instance = this; */
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public add(user) {
    return this.http.post(this.accessPointUrl,user, {headers: this.headers});
  }
  
  public login(credentials)
  {
    return this.http.get(this.accessPointUrl+'/getlogin',{headers: this.headers,params:credentials}); 
  }

  public deleteAccount(password)
  {
    return this.http.delete(this.accessPointUrl+"/?id="+this.currentUser.Id+"&password="+password,{headers: this.headers}) ;
  }

  public getRolMenuRest(menu)
  {
    return this.http.get(this.accessPointUrl+"/getRolMenu/?rol="+menu,{headers: this.headers}) ;
  }

  public setup()
  {
    return this.http.get(this.accessPointUrl+'/getSetup',{headers: this.headers}); 
  }

  public setLoginInfo(usr,menu)
  {
      this.currentUser = usr;
      this.userRol = menu;
      this.loginState = true;

      this.storage.set('local_storage',  this.loginState);
      this.storage.set('local_storage_menu',  this.userRol);
      this.storage.set('local_storage_user',  this.currentUser);
      
  }
 
  public getLoginState()
  {
    return this.storage.get('local_storage') || this.loginState;
  }

  public getUserName()
  {
    return this.storage.get('local_storage_user').Name+" "+ this.storage.get('local_storage_user').SecondName || 
      this.currentUser.Name+" "+this.currentUser.SecondName
    
  }

  public getUserId()
  {
    return this.storage.get('local_storage_user').Id || this.currentUser.Id;
  }

  public logOut()
  {
    this.loginState = false;
    this.storage.set('local_storage',  this.loginState );
  }

  public getMenu()
  {
    return this.storage.get('local_storage_menu') || this.userRol;
  }
}
