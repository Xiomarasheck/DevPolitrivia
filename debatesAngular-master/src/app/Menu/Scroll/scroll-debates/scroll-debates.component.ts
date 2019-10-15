import { Component, OnInit } from '@angular/core';
import { DebateService } from 'src/app/Services/debate.service';
import { Observable, empty } from 'rxjs';
import { Debates } from 'src/app/Model/debate';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-scroll-debates',
  templateUrl: './scroll-debates.component.html',
  styleUrls: ['./scroll-debates.component.css']
})
export class ScrollDebatesComponent implements OnInit {
  public countDebates = 0;
  alldebates$ : Observable<Debates>;
  constructor(private debateService:DebateService,private userService:UserService) {this.getDebates();}

  ngOnInit() {   
  }

   async getDebates()
  { 
    /* this.alldebates$ = await this.debateService.getAll().toPromise(); */
    this.alldebates$ =  this.debateService.getAll(this.userService.getUserId());    
     this.alldebates$.forEach(element => {
      if(element.length>0)
      {
        this.countDebates=this.countDebates+1;
      }
   }); 
  } 
}
