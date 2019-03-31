import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ProductModule } from './products/product.module';
import { MyTableModule } from './lessons-1-4/lessons-1-4.module';
import { AdminModule } from './admin/admin.module';
import { AuthGuardService } from './services/auth-guard.service';
import { CanDeactivateGuardService } from './services/can-deactivate-guard.service';
import { CommentsModule } from './comments/comments.module';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MyTableModule,
    ProductModule,
    AdminModule,
    CommentsModule
  ],
  bootstrap: [AppComponent],
  providers: [AuthGuardService, CanDeactivateGuardService]
})
export class AppModule { }
