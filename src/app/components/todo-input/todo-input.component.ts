import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import User from 'src/app/services/userInterface';
import  Todo  from '../../services/todoInterface';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {
  title: string =''; 
  //@ts-ignore
  todo:Todo;
  todos: Todo[] = [];
  currentId :number = 0;
  users :User[]= [];
  userId :number = 0;
  //@ts-ignore
  user : User;
  constructor(private _activatedRoute: ActivatedRoute , private _authService: AuthService){
    this.userId = _activatedRoute.snapshot.params['id'];
    this.users = _authService.users;
  }

 addTodo() : void {
  if(this.title){
    this.getTodos();
    let todo : Todo = {id: this.currentId ,title: this.title, status: false , isFav : false , isDeleted : false};
    // console.log(this.users);
    //@ts-ignore
    
    this.user = this.users.find((user) => user.id === Number(this.userId));
    this.todos.push(todo);
    //@ts-ignore
  this.user.todos = this.todos;
  //@ts-ignore
  this.users[this.users.findIndex((user) => user.id === Number(this.userId))] = this.user;
  localStorage.setItem('users', JSON.stringify(this.users));
    this.title = '';
  }
 }
 updateTodos(todo:Todo){
  let todoIndex = this.todos.findIndex(t=>t.id===todo.id);
  // this.users.find((user) => user.id === Number(this.userId))?.todos=this.todos;
  console.log(todoIndex);
  let user = this.users.find(u=>u.id===Number(this.userId));
  //@ts-ignore
  user.todos[todoIndex] = todo;
  localStorage.setItem('users', JSON.stringify(this.users));
 }
 getTodos() : void{
   //@ts-ignore
  this.todos = this.users.find(u => u.id === Number(this.userId)).todos;
  this.currentId =this.todos.length === 0 ? 1 : this.todos[this.todos.length -1 ].id +1;
 }
 getNewTodo(event : Todo) : void {
  this.updateTodos(event)
 }
}
