import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTableHostComponent } from "./my-table-host/my-table-host.component";

const routes: Routes = [
  { path: "", redirectTo: "lesson1", pathMatch: "full" },
  { path: "lesson1", component: MyTableHostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
