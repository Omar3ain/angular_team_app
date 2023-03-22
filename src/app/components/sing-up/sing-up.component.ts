import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent {
  @ViewChild('form') mySingUpForm:NgModel | undefined;

  constructor(private _router:Router){

  }
  submitForm(){
    // console.log(this.mySingUpForm);
    this._router.navigate(['../login'])
    
  }

}
