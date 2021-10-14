import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfHomeComponent } from './prof-home/prof-home.component';
import { ProfMeetingfullscreenComponent } from './prof-meetingfullscreen/prof-meetingfullscreen.component';
import { ProfMeetingtypeComponent } from './prof-meetingtype/prof-meetingtype.component';
import { ProfSchedmeetingComponent } from './prof-schedmeeting/prof-schedmeeting.component';
import { ProfRechistoryComponent } from './prof-rechistory/prof-rechistory.component';
import { StudHomeComponent } from './stud-home/stud-home.component';
import { MeetingComponent } from './meeting/meeting.component';
import { StudProfileComponent } from './stud-profile/stud-profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SharescreenComponent } from './sharescreen/sharescreen.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminMeetingapprovalComponent } from './admin-meetingapproval/admin-meetingapproval.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'prof-home', component: ProfHomeComponent },
  { path: 'prof-meetingtype', component: ProfMeetingtypeComponent },
  { path: 'prof-meetingfullscreen', component: ProfMeetingfullscreenComponent },
  { path: 'prof-schedmeeting', component: ProfSchedmeetingComponent },
  { path: 'prof-rechistory', component: ProfRechistoryComponent },
  { path: 'stud-home', component: StudHomeComponent },
  { path: 'meeting', component: MeetingComponent },
  { path: 'stud-profile', component: StudProfileComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'sharescreen', component: SharescreenComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'admin-meetingapproval', component: AdminMeetingapprovalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
