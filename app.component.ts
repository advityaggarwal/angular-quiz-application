import { Component } from '@angular/core';
import {QuizserveService} from './quizserve.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[QuizserveService]
})
export class AppComponent{
  title = 'Quiz';
}
