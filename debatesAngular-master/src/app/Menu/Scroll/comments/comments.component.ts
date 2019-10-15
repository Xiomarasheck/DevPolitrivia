import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/Model/comment';
import { RatingService } from 'src/app/Services/rating.service';
import { Rating } from 'src/app/Model/rating';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() currentComment: Comment;
  constructor(private ratingService:RatingService,private usr:UserService) { }
  public currentRate;
  ngOnInit() {
    this.currentRate = this.currentComment.Rate;
    
  }

  async rating()
  {
    console.log(this.currentRate);
      let rating = new Rating();
      rating.AutorID  = this.usr.getUserId();
      rating.DebateId = this.currentComment.IdDebate;
      rating.CommentId = this.currentComment.Id;
      rating.Rate = this.currentRate;
      await this.ratingService.add(rating).toPromise();        
    }
}
