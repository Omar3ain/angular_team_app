import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  loginUser(form:NgForm) : void{
    this.getUsers();
    // this.user.id = this.currentId;
    if(!form.valid){
      form.reset();
      return;
    }
    if(this.users.findIndex(u => u.name == form.value.username)!==-1){
      this.user = this.users[this.users.findIndex(user => user.name == form.value.username)];
      this._router.navigate(['/todos',this.user.id]);
      return;  
    }
    //http auth request
    this._AuthService.addUser(form.value).subscribe((user : any) => {console.log(JSON.stringify(user));
    })
    this.user={id: this.currentId, name:form.value.username, qoute:form.value.qoute, todos:[]};
    console.log(form.value);
    //@ts-ignore
    localStorage.setItem('users' ,JSON.stringify(this.users));
    this._router.navigate(['/todos',this.user.id]);
  }
  getUsers() : void{
    this.users  = this._AuthService.users;
    this.currentId = this.users.length === 0 ? 1 :this.users[this.users.length -1 ].id +1;
  }

  signUp() {
    this._router.navigate(['/signup']);
  }

  ngOnInit() : void {
    if(!localStorage.getItem('users')){
      localStorage.setItem('users' , '[]');
    }
  }

}
