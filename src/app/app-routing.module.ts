import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfHomeComponent } from './prof-home/prof-home.component';
import { ProfMeetingfullscreenComponent } from './prof-meetingfullscreen/prof-meetingfullscreen.component';
import { ProfMeetingtypeComponent } from './prof-meetingtype/prof-meetingtype.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'prof-home', component: ProfHomeComponent },
  { path: 'prof-meetingtype', component: ProfMeetingtypeComponent },
  { path: 'prof-meetingfullscreen', component: ProfMeetingfullscreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
