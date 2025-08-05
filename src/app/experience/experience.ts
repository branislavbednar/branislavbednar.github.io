import {Component, OnInit} from '@angular/core';
import {SingleExperience} from '../app.model';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience implements OnInit {

  ngOnInit(): void {
    this.experiences.push({
        name: 'Visma',
        period: '2022 - Present',
        logoUrl: 'assets/visma.png',
        description: 'Working on various software projects, focusing on full-stack development.'
      },
      {
        name: 'Finshape',
        period: '2018 - 2022',
        logoUrl: 'assets/bsc.png',
        description: 'Working on various software projects, focusing on full-stack development.'
      },
      {
        name: 'Hotovo',
        period: '2019 - 2022',
        logoUrl: 'assets/hotovo.jpeg',
        description: 'Working on various software projects, focusing on full-stack development.'
      },
    )
  }

  experiences: SingleExperience[] = [];
}
