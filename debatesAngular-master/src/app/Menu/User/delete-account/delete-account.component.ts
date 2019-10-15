import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import {Response} from 'src/app/Model/response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit{

  public deleteAccountForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private usrService:UserService,private router: Router) { } 
 

  ngOnInit() {
    this.deleteAccountForm = this.formBuilder.group({
      Password:['',Validators.required]
    }); 
  }

  async deleteAccount()
  {
      var response = new Response();
      response =  <Response>await this.usrService.deleteAccount(this.deleteAccountForm.value.Password).toPromise();
      alert(response.Message)
      if(response.State==0)
      {
        this.router.navigate(['/login']);
      }
      else
      {
        this.deleteAccountForm.reset();
      }  
  }
}
