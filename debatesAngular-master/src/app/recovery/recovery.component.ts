import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NavPageService } from '../Services/nav-page.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {
  public recoveryForm: FormGroup;
  public ajax: Boolean = false;
  public showFormRecovery: Boolean = true;
  public mailNotExists: Boolean = false;
  public changePassword: Boolean = false;

  constructor(
    protected tools: NavPageService,
    private formBuilder: FormBuilder,
    private usrService: UserService,
    private rutaActiva: ActivatedRoute
  ) { }

  ngOnInit() {
    this.recoveryForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.minLength(6), Validators.email]]
    });

    if(this.rutaActiva.snapshot.params.id){
      this.changePassword = true;
      this.showFormRecovery = false;
    }
  }

  async recoveryValidate() {
    this.ajax = true;
    let user = this.recoveryForm.value.Email;
    let response = await this.usrService.recovery(user).toPromise();
    if(response){
      this.showFormRecovery = false;
    }
    else{
      this.ajax = false;
      this.mailNotExists = true;
    }
  }

}
