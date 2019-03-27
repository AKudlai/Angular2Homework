import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CommentModel } from '../models/comment';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  public commentForm: FormGroup;
  public comment: CommentModel;
  public errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private service: CommentService ) { }

  ngOnInit() {
    this.buildForm();
  }

  onSubmit(commentForm: FormGroup) {
    this.comment.userName = commentForm.value.userName;
    this.comment.commentText = commentForm.value.commentText;
    this.comment.date = new Date();

    if(!this.comment.id) {
      this.service.addComment(this.comment).subscribe();
    }
  }

  private buildForm(){
    this.commentForm = this.formBuilder.group({
      userName: ["", Validators.required],
      commentText: ["", Validators.required]
    })
  }
}
