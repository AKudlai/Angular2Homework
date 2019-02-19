import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ProductModule } from './products/product.module';
import { MyTableModule } from './lessons-1-4/lessons-1-4.module';
import { AdminModule } from './admin/admin.module';
import { AuthGuardService } from './services/auth-guard.service';
import { CanDeactivateGuardService } from './services/can-deactivate-guard.service';
import { CommentsModule } from './comments/comments.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MyTableModule,
    ProductModule,
    AdminModule,
    CommentsModule
  ],
  bootstrap: [AppComponent],
  providers: [AuthGuardService, CanDeactivateGuardService]
})
export class AppModule { }
