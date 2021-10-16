import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ProfHomeComponent } from './prof-home/prof-home.component';
import { ProfMeetingtypeComponent } from './prof-meetingtype/prof-meetingtype.component';
import { ProfSchedmeetingComponent } from './prof-schedmeeting/prof-schedmeeting.component';
import { ProfMeetingfullscreenComponent } from './prof-meetingfullscreen/prof-meetingfullscreen.component';
import { ProfRechistoryComponent } from './prof-rechistory/prof-rechistory.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfHomeComponent,
    ProfMeetingtypeComponent,
    ProfMeetingfullscreenComponent,
    ProfSchedmeetingComponent,
    ProfRechistoryComponent,
    StudHomeComponent,
    MeetingComponent,
    StudProfileComponent,
    ForgotPasswordComponent,
    SharescreenComponent,
    AdminHomeComponent,
    AdminMeetingapprovalComponent,
    AdminChoosemeetingtypeComponent,
    AdminSchedmeetingComponent,
    AdminManagemeetingsComponent,
    AdminMeetingfullscreenComponent,
    AdminSharescreenComponent,
    StudRechistoryComponent,
    StudMeetingComponent,
    StudMeetingfullscreenComponent,
    StudSharescreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatCheckboxModule,
    MatTabsModule,
    MatDatepickerModule,
    MatInputModule,
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
