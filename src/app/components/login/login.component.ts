import { Component } from '@angular/core';
import User from 'src/app/services/userInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user : User = {
    id: 0,
    name : '',
    qoute : '',
    todos : [],
  }

}
