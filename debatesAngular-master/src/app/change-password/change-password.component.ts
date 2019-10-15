import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NavPageService } from '../Services/nav-page.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  public changePasswordForm: FormGroup;
  public ajax: Boolean = false;
  public showChange: Boolean = false;
  public idUser;
  public changePage: Boolean = false;

  constructor(
    protected tools: NavPageService,
    private formBuilder: FormBuilder,
    private usrService: UserService,
    private rutaActiva: ActivatedRoute
  ) { }

  ngOnInit() {
    this.changePage = this.rutaActiva.snapshot.params.id === undefined;
    this.idUser = this.changePage ? this.usrService.getUserId() : this.rutaActiva.snapshot.params.id;
    this.changePasswordForm = this.formBuilder.group({
      Password: ['', [Validators.required, Validators.minLength(8)]],
      passwordRepeat: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  async changePasswordAction(){
    this.ajax = true;
    let password = this.changePasswordForm.value.Password;
    const params = {
      'password': password,
      'id': this.idUser
    };
    let response = <Object>await this.usrService.changePassword(params).toPromise();
    if(response){
      this.showChange = true;
    }
  }
}
