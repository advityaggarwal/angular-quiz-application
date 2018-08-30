import { Component, OnInit } from '@angular/core';
import { QuizserveService } from '../quizserve.service';
import { ILogin } from './login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router,private _quizservice: QuizserveService){

  }

  user:string;
  pass:string;
  logins:ILogin[];
  ngOnInit() {
    this._quizservice.getLogins().subscribe(data=>this.logins=data);
  }

  onLogin():void{
    for(let i=0;i<this.logins.length;i++)
    {
      if((this.user==this.logins[i].username) && (this.pass=this.logins[i].password))
    {
      this._router.navigate(['questions']);
    }
    }
    
  }

}
