import { Component, OnInit, ViewChild } from '@angular/core';
// Imports for responsive sidenav
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay } from 'rxjs/operators';
import { debounce } from 'lodash';

@Component({
  selector: 'app-prof-meetingfullscreen',
  templateUrl: './prof-meetingfullscreen.component.html',
  styleUrls: ['./prof-meetingfullscreen.component.css']
})
export class ProfMeetingfullscreenComponent implements OnInit{

  // Variables needed for a responsive sidenav
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver) { }

  ngOnInit() {
    // Call dish function everytime window resizes
    window.addEventListener("resize", () => {
      this.Dish();
    });
    
    // Run dish function at first page load
    this.Dish();

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

  

  //Script JS
  Area(increment: any, count : any, width : any, height : any, margin : any = 10) { // Counts the area of height and width dynamically..
    let i =0 ; let w = 0;
    let h = increment * 0.75 + (margin * 2);
    while (i < (count)) {
        if ((w + increment) > width) {
            w = 0;
            h = h + (increment * 0.75) + (margin * 2);
        }
        w = w + increment + (margin * 2);
        i++;
    }
      if (h > height) return false;
      else return increment;
  }

  Dish() {
    // variables:
        let Margin : any = 1.5;
        let Scenary : any = (<HTMLSelectElement>document.getElementById('Dish')); // getting the div id 'Dish' from HTML..
        let Width = Scenary.offsetWidth - (Margin * 2);
        let Height = Scenary.offsetHeight - (Margin * 2);
        let Cameras = (<HTMLSelectElement>document.getElementsByClassName('Camera')); // getting the div className 'Camera' from HTML..
        let max = 0;
    
    // loop (i recommend you optimize this)
        let i = 1;
        while (i < 5000) {
            let w = this.Area(i, Cameras.length, Width, Height, Margin);
            if (w === false) {
                max =  i - 1;
                break;
            }
            i++;
        }
    
    // set styles
        max = max - (Margin * 2);
        this.setWidth(max, Margin);
  }

  setWidth(width: any, margin: any) {
    let camera =  (<HTMLSelectElement>document.getElementsByClassName('Camera'));
    for (var s = 0; s < camera.length; s++) {
        camera[s].style.width = width + "px";
        camera[s].style.margin = margin + "px";
        camera[s].style.height = (width * 0.75) + "px";
        console.log(camera[s].style.width)
        console.log(camera[s].style.margin)
        console.log(camera[s].style.height)
    }
}
}

