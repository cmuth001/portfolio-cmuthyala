import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmuthyala-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.scss']
})
export class TestimoniesComponent implements OnInit {

  constructor() { }
  isCollapsed = false;
  ngOnInit(): void {
  }

  toggleViewMore(){
    this.isCollapsed  = !this.isCollapsed;
  }
}
