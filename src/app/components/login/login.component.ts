import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _router:Router){

  }

  name:string ='';
  navigateToMyTodo(){
    this._router.navigate(['/todos'])
  }

}
