import { Component, signal } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Experience} from './experience/experience';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgOptimizedImage,
    Experience
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('branislavbednar.github.io');
}
