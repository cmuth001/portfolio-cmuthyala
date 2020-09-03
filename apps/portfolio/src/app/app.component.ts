import { Component } from '@angular/core'
import { ColorSchemeService } from './services/color-scheme.service'

@Component({
  selector: 'cmuthyala-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio'
  constructor(private colorSchemeService: ColorSchemeService) {
    // Load Color Scheme
    console.log(this.colorSchemeService.currentActive())
    this.colorSchemeService.update('dark')
  }
}
