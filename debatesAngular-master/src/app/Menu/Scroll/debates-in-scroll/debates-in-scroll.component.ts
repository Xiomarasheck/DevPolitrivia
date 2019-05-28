import { Component, OnInit, Input } from '@angular/core';
import { Debate } from 'src/app/Model/debate';
import { Comment } from 'src/app/Model/comment';
import { Response } from 'src/app/Model/response';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { CommentService } from 'src/app/Services/comment.service';
import { Observable } from 'rxjs';
import { RatingService } from 'src/app/Services/rating.service';
import { Rating } from 'src/app/Model/rating';



@Component({
  selector: 'app-debates-in-scroll',
  templateUrl: './debates-in-scroll.component.html',
  styleUrls: ['./debates-in-scroll.component.css']
})
export class DebatesInScrollComponent implements OnInit {

  @Input() debate: Debate;
  public currentRate ;
  public debatesInScrollForm:FormGroup;
  public showComment = false;
  public textButton = "Ver comentarios";
  commentsInDebate$ : Observable<Comment>;
  constructor(private formBuilder:FormBuilder,
    private usr:UserService,private commentService:CommentService
    ,private ratingService:RatingService) {
      
     // this.currentRate = this.debate.Rate;
    }

  ngOnInit() {
    console.log(this.debate.Rate);
    this.currentRate = this.debate.Rate;
      this.debatesInScrollForm = this.formBuilder.group({
        Descripcion:['',Validators.required]
      });
  }

  async sendComment()
  {
      let comment = new Comment();
      var response = new Response();
      comment = <Comment>this.debatesInScrollForm.value;
      comment.AutorId  = this.usr.getUserId();
      comment.IdDebate = this.debate.Id;
      response = <Response>await this.commentService.add(comment).toPromise();
      if(response.State==0)
      {
        this.debatesInScrollForm.reset();
      }
      alert(response.Message);   
      this.showComment = false;
      this.getComment();
  }

  async getComment()
  {
      this.showComment = !this.showComment;
      if(this.showComment)
      {
        this.commentsInDebate$ = this.commentService.getComments(this.debate.Id);
        this.textButton = "ocultar comentarios";
      }
      else{
        this.textButton = "Ver comentarios";
      }
  }

  async rating()
  {
      let rating = new Rating();
      rating.AutorID  = this.usr.getUserId();
      rating.DebateId = this.debate.Id;
      rating.Rate = this.currentRate;
      await this.ratingService.add(rating).toPromise();    
  }
}
