import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentsViewComponent } from './comments-view/comments-view.component';
import { CommentsGridComponent } from './comments-grid/comments-grid.component';
import { CommentService } from './services/comment.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CommentFormComponent, 
    CommentsViewComponent, 
    CommentsGridComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [CommentService]
})
export class CommentsModule { }
