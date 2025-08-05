import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {SingleExperience} from '../app.model';

@Component({
  selector: 'app-experience-details-dialog',
  imports: [],
  templateUrl: './experience-details-dialog.html',
  styleUrl: './experience-details-dialog.scss'
})
export class ExperienceDetailsDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: SingleExperience) {
  }
}
