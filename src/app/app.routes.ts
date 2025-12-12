import { Routes } from '@angular/router';
import { FlagListComponent } from './pages/flag-list/flag-list.component';
import { FlagDetailComponent } from './pages/flag-detail/flag-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'flags',
    pathMatch: 'full'
  },
  {
    path: 'flags',
    component: FlagListComponent,
  },
  {
    path: 'flags/:id',
    component: FlagDetailComponent
  },
  {
    path: '**',
    redirectTo: 'flags'
  }
];
