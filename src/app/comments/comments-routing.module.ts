import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsViewComponent } from './comments-view/comments-view.component';

const routing: Routes = [
  {
    path: 'comments',
    component: CommentsViewComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routing)],
  exports: [RouterModule]
})

export class CommentsRoutingModule { }