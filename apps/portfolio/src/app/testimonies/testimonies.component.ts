import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmuthyala-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.scss']
})
export class TestimoniesComponent implements OnInit {

  constructor() { }
  isCollapsed = false;
  testimonyToggleText = "VIEW MORE";
  testimonyToggleIcon = "expand_more";
  ngOnInit(): void {
  }

  toggleViewMore(){
    this.isCollapsed  = !this.isCollapsed;
    this.testimonyToggleText = this.isCollapsed ?  "VIEW LESS" : "VIEW MORE" ;
    this.testimonyToggleIcon = this.isCollapsed ? "expand_less" : "expand_more";
  }
}
