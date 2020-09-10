import { Component, OnInit } from '@angular/core'
import { Icollege } from '../../../../../libs/models/src/lib/models'

@Component({
  selector: 'cmuthyala-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  public colleges: Icollege[] = [
    {
      name: 'Amrita University',
      class: 'amrita-header-image',
      degree: 'B.Tech in Computer Science',
      cgpa: 'CGPA: 7.67/10.0',
      url: 'https://www.amrita.edu/',
    },
    {
      name: 'Old Dominion University',
      class: 'odu-header-image',
      degree: "Master's in Computer Science",
      cgpa: 'CGPA: 3.77/4.0',
      url: 'https://www.odu.edu/',
    },
  ]

  constructor() {}

  ngOnInit(): void {}
}
