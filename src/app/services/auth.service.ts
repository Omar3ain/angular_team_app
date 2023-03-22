import { Injectable } from '@angular/core';
//import User from './userInterface';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  users :any[] = JSON.parse(localStorage.getItem('users') as string) || [];  
  constructor( private _http : HttpClient) { }
  getUsers() {
    
    return this._http.get('https://dummyjson.com/users?skip=50&limit=50');
   }

   addUser(data : any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post('https://dummyjson.com/users/add' , data ,{headers} )
   }

   isUser(body : any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post('https://dummyjson.com/auth/login' , body , {headers})
   }
  
}
