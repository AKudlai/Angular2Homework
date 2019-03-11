import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommentModel } from '../models/comment';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  public commentForm: FormGroup;
  public comment: CommentModel;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  onSubmit(form) {
    this.comment.userName = form.value;
    this.comment.commentText = form.value;
  }

  private buildForm(){
    this.commentForm = this.formBuilder.group({
      userName: ["", Validators.required],
      commentText: ["", Validators.required]
    })
  }
}
