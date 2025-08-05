import { Component, signal } from '@angular/core';
import {Experience} from './experience/experience';
import {AboutMe} from './about-me/about-me';
import {LandingPage} from './landing-page/landing-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Experience,
    AboutMe,
    LandingPage
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('branislavbednar.github.io');
}
