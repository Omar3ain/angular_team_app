import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';
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
  user: User = { } as User;
  userId = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService
  ) {
    this.userId = Number(this.activatedRoute.snapshot.params['id']);
  }

  addTodo(): void {
    this.todoService.addTodoToUser(this.userId, this.title);
    this.getTodos();
    this.title = '';
  }

  updateTodos(todo: Todo): void {
    this.todoService.updateTodoInUser(this.userId, todo);
  }

  getNewTodo(event : Todo) : void {
    this.updateTodos(event)
  }
  
  private getTodos(): void {
    this.todos = this.todoService.getTodosForUser(this.userId);
  }
 ngOnInit() {
  this.getTodos();
 }
}
