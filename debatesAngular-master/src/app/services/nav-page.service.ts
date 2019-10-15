import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavPageService {

  constructor(private router: Router) { }

  
  public nav(destino:string){
    this.router.navigate([`/${destino}`]);
  }
}
