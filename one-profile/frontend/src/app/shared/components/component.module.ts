import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialUiModule } from '../ui-modules/material-ui/material-ui.module';
import { HeaderComponent } from './header/header.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { ButtonComponent } from './button/button.component';
import { AlertMessageComponent } from './alert-message/alert-message.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FeatureCardComponent,
    ButtonComponent,
    AlertMessageComponent
  ],
  imports: [
    CommonModule,
    MaterialUiModule
  ],
  exports: [
    HeaderComponent,
    FeatureCardComponent,
    ButtonComponent,
    AlertMessageComponent
  ]
})
export class ComponentModule { }
