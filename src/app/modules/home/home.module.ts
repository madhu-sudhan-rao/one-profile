import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { FeaturesComponent } from './components/features/features.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    HomeScreenComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
