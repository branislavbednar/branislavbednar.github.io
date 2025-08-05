import {Component, Input, OnInit} from '@angular/core';
import {SingleExperience} from '../app.model';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-experience-card',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.scss'
})
export class ExperienceCard implements OnInit {
  @Input() experience!: SingleExperience;

  ngOnInit(): void {
    // Implementation can be empty if no initialization logic is needed
  }
}
