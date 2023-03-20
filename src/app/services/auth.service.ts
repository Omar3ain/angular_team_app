import { Injectable } from '@angular/core';
import User from './userInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users : User[]  = JSON.parse(localStorage.getItem('users') as string) || [];  
  constructor() { }
}
