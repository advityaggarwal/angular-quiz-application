import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuizserveService } from './quizserve.service';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuestionsComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule, AppRoutingModule
  ],
  providers: [QuizserveService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
