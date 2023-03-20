import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';

const routes: Routes = [
  {path: '', redirectTo: 'login' ,pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'todos/:id' , component : TodoInputComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
