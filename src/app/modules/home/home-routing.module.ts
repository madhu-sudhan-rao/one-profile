import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { FeaturesComponent } from './components/features/features.component';

const routes: Routes = [
  {
    path: '',
    component: HomeScreenComponent,
    children: [
      {
        path: '',
        redirectTo: 'features',
        pathMatch: 'full'
      },
      {
        path: 'features',
        component: FeaturesComponent,
        children: [
   
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
