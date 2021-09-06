import { Component, OnInit, ViewChild } from '@angular/core';
// Imports for responsive sidenav
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-prof-meetingfullscreen',
  templateUrl: './prof-meetingfullscreen.component.html',
  styleUrls: ['./prof-meetingfullscreen.component.css']
})
export class ProfMeetingfullscreenComponent implements OnInit {

    // Variables needed for a responsive sidenav
    @ViewChild(MatSidenav)
    sidenav!: MatSidenav;
  
    constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // Observes for breakpoint changes and changes sidenav mode to be more responsive
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

}
