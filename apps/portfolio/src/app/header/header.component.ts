import { Component, OnInit } from '@angular/core'
import { ColorSchemeService } from '../services/color-scheme.service'

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
  useDefaultTheme = true
  darkThemeStatus = 'ON'
  constructor(private colorSchemeService: ColorSchemeService) {}
  ngOnInit(): void {}
  toggleTheme(event) {
    this.useDefaultTheme = !this.useDefaultTheme
    const theme = this.useDefaultTheme ? 'dark' : 'light'
    this.darkThemeStatus = this.useDefaultTheme ? 'ON' : 'OFF'
    this.colorSchemeService.update(theme)
    console.log(event)
  }
}
