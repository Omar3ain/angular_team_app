import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './components/login/login.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';

const routes: Routes = [
  {path: '', redirectTo: 'signUp' ,pathMatch: 'full'},
  {path: 'signUp', component: SingUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'todos/:id' , component : TodoInputComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
