import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})

export class SingUpComponent {
  @ViewChild('form') mySingUpForm:NgModel | undefined;

  constructor(private _router:Router , private _auth: AuthService){

  }
  submitForm(form : any){
    // console.log(this.mySingUpForm);
    this._router.navigate(['../login']);
    this._auth.addUser(form.value);
    // console.log(form.value);
    // this._auth.getUsers().subscribe((res:any)=>{
    //   console.log(res.users);
    // });

  }

}
