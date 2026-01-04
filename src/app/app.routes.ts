import { Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  {
    path: 'communes', loadComponent: () => import('./components/communes/communes.component').then(m => m.CommunesComponent)

  },
  // Détail d'une commune par ID
  {
    path: 'communes/:id',
    loadComponent: () =>
      import('./components/commune-detail/commune-detail.component')
        .then(m => m.CommuneDetailComponent)
  },
  //  Redirection pour tous les autres chemins
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
