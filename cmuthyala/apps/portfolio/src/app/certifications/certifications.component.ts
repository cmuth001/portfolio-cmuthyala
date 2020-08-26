import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmuthyala-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
  isCollapsed = false;
  certToggleText = "...show more";
  certToggleIcon = "expand_more";
  constructor() { }

  ngOnInit(): void {
  }

  toggleViewMore(){
    this.isCollapsed  = !this.isCollapsed;
    this.certToggleText = this.isCollapsed ?  "show less" : "...show more" ;
    this.certToggleIcon = this.isCollapsed ? "expand_less" : "expand_more";
  }
}
