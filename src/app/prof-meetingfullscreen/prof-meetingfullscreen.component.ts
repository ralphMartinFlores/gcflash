import { Component, OnInit, ViewChild } from '@angular/core';
// Imports for responsive sidenav
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay } from 'rxjs/operators';
import { debounce } from 'lodash';

declare var Area: any;
declare var Dish: any;
declare var setWidth: any;

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
    new Area();
    new Dish();
    new setWidth();
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
      this.layout();
  }

    //For layout of every video tiles
    recalculateLayout() {
    const gallery = document.getElementById("gallery");
    const aspectRatio = 16 / 9;
    const screenWidth = document.body.getBoundingClientRect().width;
    const screenHeight = document.body.getBoundingClientRect().height;
    const videoCount = document.getElementsByTagName("video").length;
  
    // npm install rect-scaler
    function calculateLayout(
      containerWidth: number,
      containerHeight: number,
      videoCount: number,
      aspectRatio: number
    ): { width: number; height: number; cols: number } {
      let bestLayout = {
        area: 0,
        cols: 0,
        rows: 0,
        width: 0,
        height: 0
      };
  
      // brute-force search layout where video occupy the largest area of the container
      for (let cols = 1; cols <= videoCount; cols++) {
        const rows = Math.ceil(videoCount / cols);
        const hScale = containerWidth / (cols * aspectRatio);
        const vScale = containerHeight / rows;
        let width;
        let height;
        if (hScale <= vScale) {
          width = Math.floor(containerWidth / cols);
          height = Math.floor(width / aspectRatio);
        } else {
          height = Math.floor(containerHeight / rows);
          width = Math.floor(height * aspectRatio);
        }
        const area = width * height;
        if (area > bestLayout.area) {
          bestLayout = {
            area,
            width,
            height,
            rows,
            cols
          };
        }
      }
      return bestLayout;
    }
  
    const { width, height, cols } = calculateLayout(
      screenWidth,
      screenHeight,
      videoCount,
      aspectRatio
    );
  
    gallery?.style.setProperty("--width", width + "px");
    gallery?.style.setProperty("--height", height + "px");
    gallery?.style.setProperty("--cols", cols + "");

  }
  
  layout(){
    let calcLayout= debounce(this.recalculateLayout, 50);
    window.addEventListener("resize", calcLayout);
    calcLayout();
  }
  


}

