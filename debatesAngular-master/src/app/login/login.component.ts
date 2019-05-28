import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { Menu } from '../Model/menu';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private usrService:UserService,private router: Router,private currentUser:User,private menuUser:Menu ) { }

  ngOnInit() {
  
    this.loginForm = this.formBuilder.group({
      Email:['',[Validators.required,Validators.email]],
      Password:['',Validators.required]
    });

    this.usrService.setup().subscribe();
  }

  async loginValidate()
  {
    this.currentUser = <User> await this.usrService.login(this.loginForm.value).toPromise();  
    if(this.currentUser === null)
    { 
      alert("Usuario o contraseña incorrectos");
    }
    else
    {
      this.menuUser  = <Menu> await this.usrService.getRolMenuRest(this.currentUser.Rol).toPromise();
      this.usrService.setLoginInfo(this.currentUser,this.menuUser);
      this.router.navigate(['/Home']);
    }
  }
}
