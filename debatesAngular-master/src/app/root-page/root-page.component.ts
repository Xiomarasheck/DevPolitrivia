import { Component, OnInit, Output } from '@angular/core';
import { Router, UrlSegment } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root-page',
  templateUrl: './root-page.component.html',
  styleUrls: ['./root-page.component.css']
})
export class RootPageComponent implements OnInit {
  public showLogin = false;
  public showRegister = false;
  public showRecovery = false;

  constructor(
    private router: Router,
    private rutaActiva: ActivatedRoute
  ) { }

  ngOnInit() {
    let ruta = this.rutaActiva.url['value'][0] === undefined ? '' : this.rutaActiva.url['value'][0].path;
    this.navigationSection(ruta);
  }

  public navigationSection(ruta){
    this.showLogin = false;
    this.showRegister = false;
    this.showRecovery = false;

    if(ruta == 'RegisterUser'){
      this.showRegister = true;
    }
    else if(ruta == 'Recovery'){
      this.showRecovery = true;
    }
    else{
      this.showLogin = true;
    }
  }

}
