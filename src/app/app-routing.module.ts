import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfHomeComponent } from './prof-home/prof-home.component';
import { ProfMeetingfullscreenComponent } from './prof-meetingfullscreen/prof-meetingfullscreen.component';
import { ProfMeetingtypeComponent } from './prof-meetingtype/prof-meetingtype.component';
import { ProfSchedmeetingComponent } from './prof-schedmeeting/prof-schedmeeting.component';
import { ProfRechistoryComponent } from './prof-rechistory/prof-rechistory.component';
import { StudHomeComponent } from './stud-home/stud-home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'prof-home', component: ProfHomeComponent },
  { path: 'prof-meetingtype', component: ProfMeetingtypeComponent },
  { path: 'prof-meetingfullscreen', component: ProfMeetingfullscreenComponent },
  { path: 'prof-schedmeeting', component: ProfSchedmeetingComponent },
  { path: 'prof-rechistory', component: ProfRechistoryComponent },
  { path: 'stud-home', component: StudHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
