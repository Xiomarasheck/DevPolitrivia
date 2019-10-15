import { Component, OnInit } from '@angular/core';
import { DebateService } from 'src/app/Services/debate.service';
import { Observable, empty } from 'rxjs';
import { Debates } from 'src/app/Model/debate';
import { UserService } from 'src/app/Services/user.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Prueba1', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Prueba1', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Prueba1', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Prueba1', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Prueba1', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Prueba1', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Prueba1', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Prueba1', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Prueba1', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Prueba1', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})

export class ReportsComponent implements OnInit {

  public countDebates = 0;
  alldebates$ : Observable<Debates>;
  
  constructor(private debateService:DebateService,private userService:UserService) {
    this.getDebates();
  }

  public dataSource;
  public displayedColumns : string[];

  ngOnInit() {

    this.dataSource = ELEMENT_DATA;
    this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
  }

  async getDebates()
  { 
    this.alldebates$ =  this.debateService.getAll(this.userService.getUserId());    
    this.alldebates$.forEach(element => {
      this.countDebates = this.countDebates+1;
    }); 
  }
}