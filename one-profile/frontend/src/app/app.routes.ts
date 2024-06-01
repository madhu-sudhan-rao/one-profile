import { Routes } from '@angular/router';
import { HomeScreenComponent } from './modules/home/screens/home-screen/home-screen.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home/features',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
        // component: HomeScreenComponent
    },
    {
        path: 'profile',
        loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)
      }
];
