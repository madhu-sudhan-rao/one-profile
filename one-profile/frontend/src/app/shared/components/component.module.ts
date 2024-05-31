import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialUiModule } from '../ui-modules/material-ui/material-ui.module';
import { HeaderComponent } from './header/header.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FeatureCardComponent
  ],
  imports: [
    CommonModule,
    MaterialUiModule
  ],
  exports: [
    HeaderComponent,
    FeatureCardComponent
  ]
})
export class ComponentModule { }
