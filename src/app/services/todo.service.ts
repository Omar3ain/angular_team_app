import { Injectable } from '@angular/core';
import User from './userInterface';
import Todo from './todoInterface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private currentId = 0;
  private users: User[] = [];

  constructor() {
    
  }

  addTodoToUser(userId: number, title: string): void {
    if (!title) return;
    this.getUsers();
    const user = this.users.find((u) => u.id === userId);
    if (!user) return;
    this.getTodosForUser(user.id)
    const todo: Todo = {
      id: this.currentId,
      title,
      status: false,
      isFav: false,
      isDeleted: false,
    };
    user.todos.push(todo);
    this.updateUser(user);
  }

  updateTodoInUser(userId: number, todo: Todo): void {
    this.getUsers();
    const user = this.users.find((u) => u.id === userId);
    if (!user) return;
    const todoIndex = user.todos.findIndex((t) => t.id === todo.id);
    if (todoIndex < 0) return;
    user.todos[todoIndex] = todo;
    this.updateUser(user);
  }

  getTodosForUser(userId: number): Todo[] {
    this.getUsers();
    const user = this.users.find(u => u.id === userId);
    this.currentId = user?.todos ? user.todos.length +1 : 1;
    return user ? user.todos : [];
  }
  private getUsers(): void {
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
  }
  private updateUser(user: User): void {
    this.getUsers();
    const userIndex = this.users.findIndex((u) => u.id === user.id);
    if (userIndex < 0) return;
    this.users[userIndex] = user;
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
