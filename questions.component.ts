import { Component, OnInit } from '@angular/core';
import {IQues} from './questions';
import {QuizserveService} from '../quizserve.service';
import { ICheck } from './checkbox';
import {IAns} from './answer'
import { Router } from '@angular/router';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers:[QuizserveService]
})
export class QuestionsComponent implements OnInit {
  validate:boolean=false;
  questions:IQues[];
  answers:IAns[];
  constructor(private _quizservice: QuizserveService,private _router:Router){

  }
  answerKey=new Array<IAns>(5);
  initialise1():void{
    for(let i=0;i<this.userResponse.length;i++)
    {
      this.userResponse[i]=new ICheck;
    }
  }

  initialise2():void{
    for(let i=0;i<this.answerKey.length;i++)
    {
      this.answerKey[i]=new IAns;
    }
  }
  marked(option:string):boolean{
    if(this.userResponse[this.selectedQuestion.sNo-1].answerbox.findIndex((x)=>x==option)!=-1)
    {
      return true;
    }
    else{
      return false;
    }
  }

  ngOnInit():void {
    this._quizservice.getQuestions().subscribe(data=>this.questions=data);
    console.log(this.questions);
    this._quizservice.getAnswers().subscribe(data=>this.answerKey=data);
    console.log(this.answerKey);
    
    this.initialise1();
    this.initialise2();

  }
  score:any=0;
  evaluate():any
  {
    if(confirm("Do u wnt to submit?"))
    {          
      for(let i=0;i<this.answerKey.length;i++)
      {let count:number=0;
        for(let j=0;j<this.answerKey[i].ans.length;j++)
        {
          for(let k=0;k<this.userResponse[i].answerbox.length;k++)
          {
            if(this.userResponse[i].answerbox[k]==this.answerKey[i].ans[j])
            {
              count++;
            }
          }
        }
        if(count==this.answerKey[i].ans.length && this.answerKey[i].ans.length==this.userResponse[i].answerbox.length)
          {
            //count=0;
            this.score++; 
            console.log(this.score);
            
            
          }
          let navigationExtras = {
            queryParams: { scoreFinal: this.score }
          };          
          this._router.navigate(['result'],navigationExtras);
      }
      //this._quizservice.setScore(this.score); 
     
      
      
      //this.score=0;
    }
    
  }
  shuffleQuestions(obj:IQues[]):IQues[]
  {
    var index;
    var temp;
    for(var i=obj.length;i>0;i--)
    {
      index=Math.floor(Math.random()*i);
      temp=obj[index];
      obj[index]=obj[i-1];
      obj[i-1]=temp;
    }
    return obj;
  }


  p:number=1;
  selectedQuestion:IQues;
  newquestions:IQues[];
  nav(x:number):void{
    console.log(x);
    this.selectedQuestion=this.newquestions[x-1];
    this.p=x;
  }


  nextQues():void{
    if(this.p!=5)
    {
      this.selectedQuestion=this.newquestions[this.p];
      this.p=this.p+1;
    }
    else{
      this.selectedQuestion=this.newquestions[this.p-1];
    }
  }


  valid():void{
    this.validate=true;
    this.newquestions=this.shuffleQuestions(this.questions);
    this.selectedQuestion=this.newquestions[0];
    //console.log(this.newquestions);
    
  }
  userResponse=new Array<ICheck>(5);
  //userResponseSort=new Array<ICheck>(5);
  option:boolean=false;
  valueSelect(x:string,y:number,z:string):void{
    if(z=="radio")
    {
      if(this.option==false)
      {
        /* if(this.userResponse.findIndex((a)=>a==y)==-1)
        {
          
        }
        else
        {
          this.userResponse.splice(this.userResponse.length-2,2,x,y);
        }
        console.log(this.userResponse); */

        this.userResponse[y-1]=new ICheck;
        this.userResponse[y-1].answerbox.push(x);
        //this.userResponse[y-1].answerbox.push(y);
        console.log(this.userResponse);
      }
    }
    else
    {
      if(this.userResponse[y-1].answerbox.findIndex((a)=>a==x)==-1)
      {
        this.userResponse[y-1].answerbox.push(x);
        //this.userResponse[y-1].answerbox.push(y);
      }
      else{
        this.userResponse[y-1].answerbox.splice(this.userResponse[y-1].answerbox.indexOf(x),1);
      }
      console.log(this.userResponse); 
    }
  }
  


}





/* .map((x)=>{console.log(x);
  return x;}); */