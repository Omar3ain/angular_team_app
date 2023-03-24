import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  constructor(private _router:Router ) {
  }
  us = [
    {
      name : 'Muammed osama',
      job : 'Software Engineer',
      email : 'mohamedosama135246@gmail.com',
      number : '01015390878'
    },
    {
      name : 'mohamed salah',
      job : 'Software Engineer',
      email: 'mohamedsalahmasoud173@gmail.com',
      number : '01127588096'
      
    },
    {
      name : 'Omar medhat',
      job : 'Software Engineer',
      email: 'omar3ain@gmail.com',
      number : '01151527837'
      
    },
  ]
  backLogin(){
    this._router.navigate(['/login']);
  }
  
}
