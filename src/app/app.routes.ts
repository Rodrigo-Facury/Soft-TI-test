import { Routes } from '@angular/router';
import { EntitiesDashboardComponent } from './entities-dashboard/entities-dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
  { path: 'dashboard', component: EntitiesDashboardComponent },
  { path: '', component: WelcomeComponent }
];
