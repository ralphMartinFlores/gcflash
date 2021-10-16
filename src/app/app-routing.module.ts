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
import { AdminChoosemeetingtypeComponent } from './admin-choosemeetingtype/admin-choosemeetingtype.component';
import { AdminSchedmeetingComponent } from './admin-schedmeeting/admin-schedmeeting.component';
import { AdminManagemeetingsComponent } from './admin-managemeetings/admin-managemeetings.component';
import { AdminMeetingfullscreenComponent } from './admin-meetingfullscreen/admin-meetingfullscreen.component';
import { AdminSharescreenComponent } from './admin-sharescreen/admin-sharescreen.component';
import { StudRechistoryComponent } from './stud-rechistory/stud-rechistory.component';
import { StudMeetingComponent } from './stud-meeting/stud-meeting.component';
import { StudMeetingfullscreenComponent } from './stud-meetingfullscreen/stud-meetingfullscreen.component';
import { StudSharescreenComponent } from './stud-sharescreen/stud-sharescreen.component';

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
  { path: 'admin-meetingapproval', component: AdminMeetingapprovalComponent },
  { path: 'admin-choosemeetingtype', component: AdminChoosemeetingtypeComponent },
  { path: 'admin-schedmeeting', component: AdminSchedmeetingComponent },
  { path: 'admin-managemeeting', component: AdminManagemeetingsComponent },
  { path: 'admin-meetingfullscreen', component: AdminMeetingfullscreenComponent },
  { path: 'admin-sharescreen', component: AdminSharescreenComponent },
  { path: 'stud-rechistory', component: StudRechistoryComponent },
  { path: 'stud-meeting', component: StudMeetingComponent },
  { path: 'stud-meetingfullscreen', component: StudMeetingfullscreenComponent },
  { path: 'stud-sharescreen', component: StudSharescreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
