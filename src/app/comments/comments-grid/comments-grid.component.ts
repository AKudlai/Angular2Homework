import { Component, OnInit, Input } from '@angular/core';
import { CommentModel } from '../models/comment';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comments-grid',
  templateUrl: './comments-grid.component.html',
  styleUrls: ['./comments-grid.component.css']
})
export class CommentsGridComponent implements OnInit {

  constructor(
    private commentService: CommentService) { }

  @Input()
  public comments: CommentModel[];

  ngOnInit() {
    this.commentService.getComments().subscribe(comments => this.comments = comments);
  }
}
