import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProfileScreenComponent } from './screens/profile-screen/profile-screen.component';
import { DetailsComponent } from './screens/components/details/details.component';


@NgModule({
  declarations: [
    ProfileScreenComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
