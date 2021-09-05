import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfHomeComponent } from './prof-home/prof-home.component';
import { ProfMeetingtypeComponent } from './prof-meetingtype/prof-meetingtype.component';
import { ProfSchedmeetingComponent } from './prof-schedmeeting/prof-schedmeeting.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'prof-home', component: ProfHomeComponent },
  { path: 'prof-meetingtype', component: ProfMeetingtypeComponent },
  { path: 'prof-schedmeeting', component: ProfSchedmeetingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
