import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { MaterialUiModule } from './ui-modules/material-ui/material-ui.module';
import { ComponentModule } from './components/component.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ComponentModule,
    MaterialUiModule
  ],
  exports: [
    MaterialUiModule,
    ComponentModule
  ]
})
export class SharedModule { }
