import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-meetingfullscreen',
  templateUrl: './admin-meetingfullscreen.component.html',
  styleUrls: ['./admin-meetingfullscreen.component.css']
})
export class AdminMeetingfullscreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Call dish function everytime window resizes
    window.addEventListener("resize", () => {
      this.Dish();
    });
    
    // Run dish function at first page load
    this.Dish();
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
