import {Routes} from '@angular/router';
import {LandingPage} from './landing-page/landing-page';
import {AboutMe} from './about-me/about-me';
import {Experience} from './experience/experience';

export const routes: Routes = [
  {path: '', component: LandingPage},
  {path: 'about-me', component: AboutMe},
  {path: 'experience', component: Experience},
  {path: '**', redirectTo: ''}
];
