import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    LoginComponent,
    TodoItemComponent,
    NavbarComponent,
    SingUpComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
