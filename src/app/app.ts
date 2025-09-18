import {Component, signal} from '@angular/core';
import {RouterOutlet, Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App{
  protected readonly title = signal('branislavbednar.github.io');

  constructor(private readonly router: Router) {
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

  showCollapsedMenu() {
    const menu = document.getElementById('collapsedMenu');
    if (menu) {
      menu.classList.toggle('w3-hide');
    }
  }

  collapseMenu() {
    const menu = document.getElementById('collapsedMenu');
    if (menu) {
      menu.classList.add('w3-hide');
    }
  }
}

