import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProfileScreenComponent } from './screens/profile-screen/profile-screen.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [
    ProfileScreenComponent,
    DetailsComponent,
    BottomSheetComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
