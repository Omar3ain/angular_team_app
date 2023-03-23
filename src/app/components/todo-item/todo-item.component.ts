import { Component ,Input , EventEmitter, Output} from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import User from 'src/app/services/userInterface';
import Todo from '../../services/todoInterface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo : Todo  = {
    id:0,
    title : '',
    status : false,
    isFav : false,
    isDeleted : false
  };
  @Output() returnTodo = new EventEmitter<Todo>();
  constructor(private _todoservice:TodoService){

  }
  
  // condition: boolean = eval("!this."+this._todoservice.showCondition); 


  changeStatus(id : number): void {
    this.todo.status = !this.todo.status;
   }
  
   deleteTodo(id : number){
    this.todo.status = false;
    this.todo.isDeleted = true;
    
    // this._todoservice.showCondition='';
    // this._todoservice.buttonClicked.emit();
   }
   getTodo() {
    // this.condition=eval(this._todoservice.showCondition);
    this.returnTodo.emit(this.todo)
   }

   ngOnInit() {
    // this.condition=eval(this._todoservice.showCondition);
   }
}
