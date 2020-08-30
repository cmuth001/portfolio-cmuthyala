import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmuthyala-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  seeMoreHighmarkText = '...see more';
  seeMoreHighmarkToggle = false;
  seeMoreOduText1 = "...see more"
  seeMoreOduToggle1 = false;
  seeMoreOduText2 = "...see more"
  seeMoreOduToggle2 = false;
  seeMoreSynopsysText = "...see more"
  seeMoreSynopsysToggle = false;
  completed = true;
  constructor() { }

  ngOnInit(): void {
  }
  highmarkSeeMoreToggle(){
    this.seeMoreHighmarkToggle = !this.seeMoreHighmarkToggle;
    this.seeMoreHighmarkText = this.seeMoreHighmarkToggle ? "see less" : "...see more"
    // console.log(this.seeMoreHighmarkText, this.seeMoreHighmarkToggle);
  }
  oduSeeMoreToggle1(){
    this.seeMoreOduToggle1 = !this.seeMoreOduToggle1;
    this.seeMoreOduText1 = this.seeMoreOduToggle1 ? "see less" : "...see more";
  }
  oduSeeMoreToggle2(){
    this.seeMoreOduToggle2 = !this.seeMoreOduToggle2;
    this.seeMoreOduText2 = this.seeMoreOduToggle2 ? "see less" : "...see more";
  }
  synopsysSeeMoreToggle(){
    this.seeMoreSynopsysToggle = !this.seeMoreSynopsysToggle;
   this.seeMoreSynopsysText =  this.seeMoreSynopsysToggle ? "see less" : "...see more";
  }


}
