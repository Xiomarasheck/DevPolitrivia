/* imports por defecto */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* imports aplicacion */
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StorageServiceModule } from 'angular-webstorage-service';

/* Componentes */
import { HomeComponent } from './Menu/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './Menu/register-user/register-user.component';
import { DebatesComponent } from './Menu/debates/debates.component';
import { ReportsComponent } from './Menu/reports/reports.component';
import { ScrollDebatesComponent } from './Menu/Scroll/scroll-debates/scroll-debates.component';
import { DebatesInScrollComponent } from './Menu/Scroll/debates-in-scroll/debates-in-scroll.component';
/* Modelos */
import {User} from './Model/user';
import {Response} from './Model/response';
import {Comment} from './Model/comment';
import {Menu} from './Model/menu';
import {Rating} from './Model/rating';
/* Servicios */
import { UserService } from './Services/user.service';
import { DebateService } from './Services/debate.service';
import { CommentService } from './Services/comment.service';
import { CommentsComponent } from './Menu/Scroll/comments/comments.component';
import { DeleteAccountComponent } from './Menu/User/delete-account/delete-account.component';
import { LocalStorageService } from './Services/local-storage.service';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterUserComponent,
    DebatesComponent,
    ReportsComponent,
    ScrollDebatesComponent,
    DebatesInScrollComponent,
    CommentsComponent,
    DeleteAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    StorageServiceModule,
    MatButtonModule, 
    MatCheckboxModule 
  ],
  providers: [UserService,DebateService,CommentService,User,Response,Comment,Menu,Rating],
  bootstrap: [AppComponent]
})
export class AppModule { }
