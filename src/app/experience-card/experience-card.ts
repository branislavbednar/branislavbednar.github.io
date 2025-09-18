import {Component, Input, OnInit} from '@angular/core';
import {SingleExperience} from '../app.model';
import {NgOptimizedImage} from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {ExperienceDetailsDialog} from '../experience-details-dialog/experience-details-dialog';

@Component({
  selector: 'app-experience-card',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.scss'
})
export class ExperienceCard {
  constructor(private readonly dialog: MatDialog) {}

  @Input() experience!: SingleExperience;

  openExperienceDetails(){
    this.dialog.open(ExperienceDetailsDialog, {
      data: this.experience,
      width: '800px',
      maxWidth: '90vw',
    });
  }
}
