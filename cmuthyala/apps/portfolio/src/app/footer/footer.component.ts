import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmuthyala-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
   public d = new Date(); 

   public currentYear = this.d.getFullYear(); 
  constructor() { }

  ngOnInit(): void {
  }

}
