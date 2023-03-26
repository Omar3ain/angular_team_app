import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TodoService } from 'src/app/services/todo.service';
import Todo from 'src/app/services/todoInterface';
import User from 'src/app/services/userInterface';

declare let navigator: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  users : User[]=[];
  userId: number =0;
  todos : Todo[]=[];
  name : string = 'random';
  user : User ={} as User;
  browser: string = '';
  os: string= '';
  online = navigator.onLine;
  batteryLevel: number = 0;
  constructor(private _activatedRoute:ActivatedRoute,private _authService: AuthService,private _router:Router,private _todoService:TodoService) {
    this.userId = Number(_activatedRoute.snapshot.params['id']);
    window.addEventListener('online', () => this.online = true);
    window.addEventListener('offline', () => this.online = false);
  }

  ngOnInit(): void {
    this.getUsers()
    navigator.getBattery().then((battery : any )=> {
      this.batteryLevel = battery.level * 100;
      battery.addEventListener('levelchange', () => {
        this.batteryLevel = battery.level * 100;
      });
    });

    const userAgent = navigator.userAgent;
    this.browser = this.getBrowser(userAgent);
    this.os = this.getOS(userAgent);
  }
  getUsers() {
    this.users = this._authService.getUserInLocalStorage();
    this.user = this.users.find((user) => user.id === this.userId)!
    this.todos= this.user.todos;
    
    
  }

  getfav(){
    this._todoService.showCondition = "Fav";
    this._todoService.buttonClicked.emit();
  }

  getDeleted(){
    this._todoService.showCondition = "Deleted";
    this._todoService.buttonClicked.emit();
  }

  favNum(){
    this.getUsers()
    return this.todos.filter(todo=>todo.isFav===true).length;

  }

  deletedNum(){
    this.getUsers()
    return this.todos.filter(todo=>todo.isDeleted===true).length;
  }
  doneNum(){
    this.getUsers()
    if(this.deletedNum()>=this.todos.length || this.todos.length==0)
      return 0;
    return Math.floor((this.todos.filter(todo=>todo.status===true).length/(this.todos.length-this.deletedNum()))*100);
  }

  logOut(){ 
    this._router.navigate(['/login']);
    }

    private getBrowser(userAgent: string): string {
      const browsers = {
        Chrome: /chrome/i,
        Safari: /safari/i,
        Firefox: /firefox/i,
        Edge: /edg/i,
        IE: /msie|trident/i
      };
      for (const browser in browsers) {
        //@ts-ignore
        if (browsers[browser].test(userAgent)) {
          return browser;
        }
      }
      return 'Unknown';
    }
  
    private getOS(userAgent: string): string {
      const os = [
        { name: 'Windows', regex: /windows nt/i },
        { name: 'Mac OS', regex: /mac os/i },
        { name: 'Linux', regex: /linux/i },
        { name: 'iOS', regex: /(ipad|iphone|ipod)/i },
        { name: 'Android', regex: /android/i }
      ];
      for (const platform of os) {
        if (platform.regex.test(userAgent)) {
          return platform.name;
        }
      }
      return 'Unknown';
    }
  }

