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
          description: 'I am currently working in the AutoPay product team where I focus primarly on a backend part. AutoPays is a cloud-based solution ' +
            'serving as a mediator between banks and ERPs. Our product offers the automatization of payment flow, approving transactions, paying invoices ' +
            'directly from ERP, check of outgoing transactions, payment cancellations, and so on.\n' +
            'Tech stack: Java EE 8, Spring boot, MySQL, Flyway, Docker, MapStruct, Junit5, Payara, AWS'
        }]
      },
      {
        name: 'Finshape',
        logoUrl: 'assets/bsc.png',
        totalPeriod: '2018 - 2022',
        roles: [{
            title: 'Backend developer',
            rolePeriod: '6/2020 - 3/2022',
            description: 'I worked here on a product component for the management of payments and transactions within the new banking platform.\n' +
              'Tech stack: Java 8, Spring boot, Tomcat, Liquibase, PostgreSql Docker, Yarn, Wiremock'
          },
          {
            title: 'Junior Java developer',
            rolePeriod: '2/2019 - 6/2020',
            description: 'I was part of a team that implemented the backend orchestration component of a brand-new platform. As we start on the greenfield, ' +
              'the first month I was researching, and learning new technologies which should be used there. The main purpose of the component was to ' +
              'provide data mappings, sync, async processing of messages, and recovery after failure within the platform.\n' +
              'Tech stack: Java 8, Apache camel, Openhub framework, Spring, Tomcat, Mapstruct, Postgresql, Docker'
          },
          {
            title: 'Junior Java developer',
            rolePeriod: '6/2018 - 2/2019',
            description: 'I started working as a junior java developer in a team that had maintained multiple applications for different clients. The aim ' +
              'was mostly to solve reported bugs and discuss them with customers. The team also focused also on the implementation of new features.\n' +
              'Tech stack: Java 8, Spring boot, Tomcat, Liquibase, PostgreSql Docker, Yarn, Wiremock'
          }]
      },
      {
        name: 'Hotovo',
        logoUrl: 'assets/hotovo.jpeg',
        totalPeriod: '2019 - 2020',
        roles: [{
          title: 'Android developer',
          rolePeriod: '9/2019 - 2/2020',
          description: 'We were developing two independent applications for waste separation in the city. We created a web app for a waste separation ' +
            'provider to create and manage events of particular separations. The second part of the whole platform was an Android application for citizens ' +
            'where the citizen can see all upcoming separation events. They can set notifications and preferences for separations that they are interested ' +
            'in. I was developing an Android app for citizens. As the project was part of school and industry cooperation at the end of the project there ' +
            'was a competition with 48 teams. We finished 3rd.\n' +
            'Tech stack: Kotlin, Firebase'
        }]
      },
    )
  }

  experiences: SingleExperience[] = [];
}
