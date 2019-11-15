import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators,AbstractControl} from '@angular/forms';
import { UserService } from '../../Services/user.service'


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
 
  public myForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private usrregister:UserService ) { }
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      Name:['',Validators.required],
      SecondName:['',Validators.required],
      Email:['',[Validators.required,Validators.email]],
      Password:['',Validators.required],
      Rol:['',Validators.required]
    });
  }

  public addUser=function(event)
  {
    this.usrregister.add(this.myForm.value).subscribe();
    alert("usuario registrado correctamente");
    this.myForm.reset();
  }
}
