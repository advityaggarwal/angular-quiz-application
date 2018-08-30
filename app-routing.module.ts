import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent } from './questions/questions.component';
import { ResultComponent } from './result/result.component';




const routes:Routes=[
  {
    path: 'login',component: LoginComponent
  },
  {
    path: 'questions',component: QuestionsComponent
  },
  {
    path: 'result',component: ResultComponent
  },
  {
    path:'',redirectTo:'/login',pathMatch:'full'
  },
  {
    path:'result',component: ResultComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
