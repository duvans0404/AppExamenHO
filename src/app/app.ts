import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HoSidebar } from './components/layout/ho-sidebar/ho-sidebar';
import { HoHeader } from './components/layout/ho-header/ho-header';
import { HoFooter } from './components/layout/ho-footer/ho-footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HoSidebar, HoHeader, HoFooter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('appExamenHO');
}
