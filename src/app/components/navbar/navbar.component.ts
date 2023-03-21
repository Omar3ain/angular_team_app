import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Todo from 'src/app/services/todoInterface';
import User from 'src/app/services/userInterface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  users : User[]=[];
  userId:number=0;
  todos : Todo[]=[];
  name :string='random';
  user : User ;
  constructor(private _activatedRoute:ActivatedRoute,private _authService: AuthService){
    this.userId = Number(_activatedRoute.snapshot.params['id']);
    this.users = _authService.users;
    //@ts-ignore
    this.user = this.users.find((user) => user.id === this.userId)
    //@ts-ignore
    this.todos= this.users.find(u => u.id === Number(this.userId)).todos;
  }
  
  favNum(){
    return this.todos.filter(todo=>todo.isFav===true).length;
    
  }

  deletedNum(){
    return this.todos.filter(todo=>todo.status===true).length;
  }

  doneNum(){
    return this.todos.filter(todo=>todo.status===true).length;
  }

}
