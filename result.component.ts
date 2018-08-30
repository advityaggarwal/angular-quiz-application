import { Component, OnInit } from '@angular/core';
import { QuizserveService } from '../quizserve.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  FinalScore:string;
  ngOnInit() {

    //this.route.params.subscribe( params => this.FinalScore=params.score);
    this.route.queryParams.subscribe(queryParams=>this.FinalScore=queryParams.scoreFinal);
  }
  

}
