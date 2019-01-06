import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MyTableComponent } from './my-table/my-table.component';
import { MyTableHostComponent } from './my-table-host/my-table-host.component';
import { MyTableService } from './services/my-table.service';
import { CreateRowComponent } from './create-row/create-row';


@NgModule({
  declarations: [
    MyTableComponent,
    MyTableHostComponent,
    CreateRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MyTableService],
})
export class MyTableModule { }