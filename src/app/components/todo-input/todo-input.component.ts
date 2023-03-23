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
  title = '';
  todo: Todo = {} as Todo;
  todos: Todo[] = [];
  currentId = 0;
  users: User[] = [];
  user: User = { id: 0, name: 'random', qoute: '', todos: [] };
  userId = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {
    this.userId = Number(this.activatedRoute.snapshot.params['id']);
    this.users = this.authService.users;
  }

  addTodo(): void {
    if (!this.title) return;
    this.getTodos();
    const todo: Todo = {
      id: this.currentId,
      title: this.title,
      status: false,
      isFav: false,
      isDeleted: false,
    };
    this.user = this.users.find((user) => user.id === this.userId) || {} as User;

    if (!this.user) return;

    this.todos.push(todo);
    this.user.todos = this.todos;
    this.users[this.users.findIndex((user) => user.id === this.userId)] = this.user;
    localStorage.setItem('users', JSON.stringify(this.users));
    this.title = '';
  }

  updateTodos(todo: Todo): void {
    const todoIndex = this.todos.findIndex((t) => t.id === todo.id);
    if (todoIndex < 0) return; // Todo not found
    const user = this.users.find((u) => u.id === this.userId);
    if (!user) return; // User not found
    user.todos[todoIndex] = todo;
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  getNewTodo(event : Todo) : void {
    this.updateTodos(event)
  }
  
  private getTodos() : void{
   this.todos = this.users.find(u => u.id === this.userId)?.todos || [];
   this.currentId =this.todos.length === 0 ? 1 : this.todos[this.todos.length -1 ].id +1;
  }
  
 ngOnInit() {
  this.getTodos();
 }
}
