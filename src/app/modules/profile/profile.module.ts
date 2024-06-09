import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProfileScreenComponent } from './screens/profile-screen/profile-screen.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { DetailsComponent } from './components/details/details.component';
import { EmptyProfileDetailsViewComponent } from './components/empty-profile-details-view/empty-profile-details-view.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserDetailRowComponent } from './components/user-details/user-detail-row/user-detail-row.component';
import { UserNameCardComponent } from './components/user-name-card/user-name-card.component';


@NgModule({
  declarations: [
    ProfileScreenComponent,
    DetailsComponent,
    BottomSheetComponent,
    EmptyProfileDetailsViewComponent,
    UserDetailsComponent,
    UserDetailRowComponent,
    UserNameCardComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
