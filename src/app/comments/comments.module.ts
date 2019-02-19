import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentsViewComponent } from './comments-view/comments-view.component';

@NgModule({
  declarations: [
    CommentFormComponent, 
    CommentsViewComponent],
  imports: [
    CommonModule
  ]
})
export class CommentsModule { }
