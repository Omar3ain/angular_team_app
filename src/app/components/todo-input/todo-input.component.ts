import { Component } from '@angular/core';
import  Todo  from './todolist';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {
  title: string ='';
  todos: Todo[] = [];
  currentId :number = 0;
 addTodo() : void {
  if(this.title){
    this.getTodos();
    let todo : Todo = {id: this.currentId ,title: '', status: false};
    todo.title = this.title;
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.title = '';
  }
 }
 changeStatus(id : number): void {
  let index: number = this.todos.findIndex((obj => obj.id == id));
  this.todos[index].status = !this.todos[index].status;
  localStorage.setItem('todos', JSON.stringify(this.todos));
 }

 getTodos() : void{
  this.todos = JSON.parse(localStorage.getItem('todos') as string) || [];
  this.currentId =this.todos.length === 0 ? 1 :this.todos[this.todos.length -1 ].id +1;
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
