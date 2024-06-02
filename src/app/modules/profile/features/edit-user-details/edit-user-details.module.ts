import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditUserDetailsRoutingModule } from './edit-user-details-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { EditDetailsComponent } from './components/edit-details/edit-details.component';


@NgModule({
  declarations: [
    EditDetailsComponent
  ],
  imports: [
    CommonModule,
    EditUserDetailsRoutingModule,
    SharedModule
  ]
})
export class EditUserDetailsModule { }
