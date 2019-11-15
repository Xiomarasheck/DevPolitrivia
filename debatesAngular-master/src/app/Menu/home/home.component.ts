import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';
import { Menu } from 'src/app/Model/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public showDebatesComponent = false;
  public showReportComponent = false;
  public showScrollDebatesComponent = false;
  public showUserOption = false;
  public showDeleteAccount = false;
  public showRegisterUser = false;
  public user = "";
  constructor(private userService:UserService,private router: Router,private menu:Menu) {
     this.user = userService.getUserName(); 
     this.menu = userService.getMenu();
   }

  ngOnInit() { 
    this.navigateComponent('ScrollDebate');
  }
  
  public navigateComponent(componente)
  {
    this.showDebatesComponent = false;
    this.showReportComponent = false;
    this.showScrollDebatesComponent = false;
    this.showUserOption = false;
    this.showDeleteAccount = false;
    this.showRegisterUser = false;

    switch(componente)
    {
        case 'Debates':{this.showDebatesComponent = true;break;}
        case 'Report':{this.showReportComponent = true;break;}
        case 'ScrollDebate':{this.showScrollDebatesComponent = true;break;}
        case 'User':{this.showUserOption=true;break;}
        case 'DeleteAccount':{this.showDeleteAccount=true;break;}
        case 'RegisterUser':{this.showRegisterUser=true;}break;
    }
  };

  public signOut()
  {  
    this.userService.logOut();
    this.router.navigate(['/login']);
  }
}
