/* imports por defecto */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* imports aplicacion */
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StorageServiceModule } from 'angular-webstorage-service';

/* Componentes */
import { RootPageComponent } from './root-page/root-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './Menu/register-user/register-user.component';
import { HomeComponent } from './Menu/home/home.component';
import { DebatesComponent } from './Menu/debates/debates.component';
import { ReportsComponent } from './Menu/reports/reports.component';
import { ScrollDebatesComponent } from './Menu/Scroll/scroll-debates/scroll-debates.component';
import { DebatesInScrollComponent } from './Menu/Scroll/debates-in-scroll/debates-in-scroll.component';
import { RegisterComponent } from './register/register.component';
/* Modelos */
import { User } from './Model/user';
import { Response } from './Model/response';
import { Comment } from './Model/comment';
import { Menu } from './Model/menu';
import { Rating } from './Model/rating';
/* Servicios */
import { UserService } from './Services/user.service';
import { DebateService } from './Services/debate.service';
import { CommentService } from './Services/comment.service';
import { CommentsComponent } from './Menu/Scroll/comments/comments.component';
import { DeleteAccountComponent } from './Menu/User/delete-account/delete-account.component';
import { LocalStorageService } from './Services/local-storage.service';
import { NavPageService } from './Services/nav-page.service';
import { RecoveryComponent } from './recovery/recovery.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

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
    RegisterComponent,
    RootPageComponent,
    RecoveryComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    StorageServiceModule
  ],
  providers: [UserService, DebateService, CommentService, User, Response, Comment, Menu, Rating, NavPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
