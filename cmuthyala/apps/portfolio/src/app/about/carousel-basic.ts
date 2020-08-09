import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './carousel-basic.html',
  styleUrls: ['./carousel-basic.scss']
})
export class NgbdCarouselBasic  {
   
  
    showNavigationArrows = false;
    showNavigationIndicators = true;
  images = [
        `/assets/carousal-image1.jpeg`,
        `/assets/carousal-image5.jpeg`,
        `/assets/carousal-image3.jpeg`    
];

}
