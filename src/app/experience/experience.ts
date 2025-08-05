import {Component, OnInit} from '@angular/core';
import {ExperienceCard} from '../experience-card/experience-card';
import {SingleExperience} from '../app.model';

@Component({
  selector: 'app-experience',
  imports: [
    ExperienceCard
  ],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience implements OnInit {
  ngOnInit(): void {
    this.experiences.push({
        name: 'Visma',
        logoUrl: 'assets/visma.png',
        totalPeriod: '2022 - Present',
        roles: [{
          title: 'Software developer',
          rolePeriod: '2022 - Present',
          description: 'Working on various software projects, focusing on full-stack development.'
        }]
      },
      {
        name: 'Finshape',
        logoUrl: 'assets/bsc.png',
        totalPeriod: '2018 - 2022',
        roles: [{
          title: 'Software developer',
          rolePeriod: '2022 - Present',
          description: 'Working on various software projects, focusing on full-stack development.'
        }]
      },
      {
        name: 'Hotovo',
        logoUrl: 'assets/hotovo.jpeg',
        totalPeriod: '2019 - 2022',
        roles: [{
          title: 'Software developer',
          rolePeriod: '2019 - 2022',
          description: 'Working on various software projects, focusing on full-stack development.'
        }]
      },
    )
  }

  experiences: SingleExperience[] = [];
}
