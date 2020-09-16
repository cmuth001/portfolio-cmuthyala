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
  themeIcon = 'brightness_3'
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
    this.themeIcon = this.useDefaultTheme ? 'brightness_3' : 'wb_sunny'
    this.darkThemeStatus = this.useDefaultTheme ? 'ON' : 'OFF'
    this.colorSchemeService.update(theme)
  }
}
