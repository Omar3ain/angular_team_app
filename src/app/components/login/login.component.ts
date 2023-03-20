import { Component } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/services/userInterface';
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users : User[] = [];
  user : User = {
    id: 0,
    name : '',
    qoute : '',
    todos : [],
  }
  currentId : number = 0;
  constructor(private _AuthService : AuthService ,private _router : Router){
    this.users  = this._AuthService.users;
  }
  loginUser() : void{
    this.getUsers();
    this.user.id = this.currentId;
    //@ts-ignore
    this.users.push(this.user);
    localStorage.setItem('users' ,JSON.stringify(this.users));
    this._router.navigate(['/todos',this.user.id]);
  }
  getUsers() : void{
    this.users  = this._AuthService.users;
    this.currentId = this.users.length === 0 ? 1 :this.users[this.users.length -1 ].id +1;
  }

  ngOnInit() : void {
    if(!localStorage.getItem('users')){
      localStorage.setItem('users' , '[]');
    }
  }

}
