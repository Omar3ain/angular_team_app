import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  user : User ={id:0,name:'random',qoute:'',todos:[]};
  constructor(private _activatedRoute:ActivatedRoute,private _authService: AuthService,private _router:Router) {
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
    return this.todos.filter(todo=>todo.isDeleted===true).length;
  }

  doneNum(){
    if(this.deletedNum()>=this.todos.length || this.todos.length==0)
      return 0;
    return (this.todos.filter(todo=>todo.status===true).length/(this.todos.length-this.deletedNum()))*100;
  }

  logOut(){ 
    this._router.navigate(['/login']);
    }

}
