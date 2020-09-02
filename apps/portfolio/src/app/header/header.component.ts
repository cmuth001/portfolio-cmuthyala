import { Component, OnInit } from '@angular/core'

export interface Tile {
  color: string
  cols: number
  rows: number
  text: string
}
@Component({
  selector: 'cmuthyala-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'Three', cols: 2, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ]
  constructor() {}

  ngOnInit(): void {}
}
