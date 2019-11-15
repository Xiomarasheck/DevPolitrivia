import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DebateService } from 'src/app/Services/debate.service';
import { Debate } from 'src/app/Model/debate';
import {Response} from 'src/app/Model/response';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-debates',
  templateUrl: './debates.component.html',
  styleUrls: ['./debates.component.css']
})
export class DebatesComponent implements OnInit {
  
  public debatesForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private debateService:DebateService,private usr:UserService) { }

  ngOnInit() {
    this.debatesForm= this.formBuilder.group({
      Titulo:['',Validators.required],
      Tema:['',Validators.required],
      FechaVencimiento:['',Validators.required]
    });
  }

   async sendDebate()
   {
      var debate = new Debate();
      var response = new Response();
      debate = <Debate>this.debatesForm.value;
      debate.Autor = this.usr.getUserId();
      response =  <Response>await this.debateService.add(debate).toPromise();
      if(response.State==0)
      {
        alert(response.Message)
        this.debatesForm.reset();
      }
      else
      {
        alert(response.Message)
      }
   } 
}
