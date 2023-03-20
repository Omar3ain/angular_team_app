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
  todos: Todo[] = [];
  currentId :number = 0;
  users :User[]= [];
  userId :number = 0;
  constructor(private _activatedRoute: ActivatedRoute , private _authService: AuthService){
    this.userId = _activatedRoute.snapshot.params['id'];
    this.users = _authService.users;
  }

 addTodo() : void {
  this.getTodos();
  let todo : Todo = {id: this.currentId ,title: this.title, status: false , isFav : false};
  let user = this.users.find((user) => user.id === Number(this.userId));
  this.todos.push(todo);
  //@ts-ignore
  user.todos = this.todos;
  //@ts-ignore
  this.users[this.users.findIndex((user) => user.id === Number(this.userId))] = user;
  localStorage.setItem('users', JSON.stringify(this.users));
 }
 changeStatus(id : number): void {
  let index: number = this.todos.findIndex((obj => obj.id == id));
  this.todos[index].status = !this.todos[index].status;
  localStorage.setItem('todos', JSON.stringify(this.todos));
 }

 getTodos() : void{
   //@ts-ignore
  this.todos = this.users.find(u => u.id === Number(this.userId)).todos;
  this.currentId =this.todos.length === 0 ? 1 : this.todos[this.todos.length -1 ].id +1;
 }
 deleteTodo(id : number){
  let index: number = this.todos.findIndex((obj => obj.id == id));
  this.todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(this.todos));
 }

 ngOnInit(): void {
  this.getTodos();
}
}
