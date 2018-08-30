import { Injectable, OnInit } from '@angular/core';
import {IQues} from './questions/questions';
import {ILogin} from './login/login';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ICheck } from './questions/checkbox';
import {IAns} from './questions/answer';


/* const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 */

@Injectable({
  providedIn: 'root'
})
export class QuizserveService {
  questionUrl='src/api/questionSet.json';
  answerUrl='src/api/answerKey.json';
  loginUrl='src/api/login.json'
  constructor(private _http:HttpClient){

  }
  getQuestions():Observable<IQues[]>
  {
    return this._http.get<IQues[]>(this.questionUrl);
  }

  getAnswers():Observable<IAns[]>
  {
    return this._http.get<IAns[]>(this.answerUrl);
  }
  getLogins():Observable<ILogin[]>
  {
    return this._http.get<ILogin[]>(this.loginUrl);
  }
 
  score:number;

  setScore(x:number):number{
    this.score=x;
    return this.score;
  }
  scoreDisplay:number;
  getScore():number{
    return this.scoreDisplay=this.score;
  }
  /* eval(x:ICheck[]):any
  {
  
    this._http.get<IAns[]>(this.answerUrl).subscribe(data=>this.answerKey=data);
    console.log(this.answerKey);
    
    for(let i=0;i<x.length;i++)
    {
      for(let j=0;j<(x[i].answerbox.length)-1;j++)
      if(x[i].answerbox[j]==this.answerKey[i].ans[0])
      {
        this.score++;
        console.log(this.score);
        
      }
    }
    
  } */


  /* .pipe(
    catchError(this.handleError('getAnswers', [])) */

 /*  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  } */

}
