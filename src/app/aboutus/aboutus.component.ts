import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  us = [
    {
      name : 'Muammed osama',
      job : 'Software Engineer',
      email : 'mohamedosama135246@gmail.com',
      number : '01015390878'
    },
    {
      name : 'Muahmmed salah',
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
}
