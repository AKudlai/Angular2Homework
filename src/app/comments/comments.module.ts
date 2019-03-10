import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentsViewComponent } from './comments-view/comments-view.component';
import { CommentsGridComponent } from './comments-grid/comments-grid.component';
import { ProvidersFeature } from '@angular/core/src/render3';
import { CommentService } from './services/comment.service';

@NgModule({
  declarations: [
    CommentFormComponent, 
    CommentsViewComponent, CommentsGridComponent],
  imports: [
    CommonModule
  ],
  providers: [CommentService]
})
export class CommentsModule { }
