import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { MaterialUiModule } from '../ui-modules/material-ui/material-ui.module';



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
