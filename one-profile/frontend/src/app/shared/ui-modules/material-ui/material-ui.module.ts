import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

const MATERIAL_UI_COMPONENTS : any= [
  MatButtonModule,
  MatToolbarModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL_UI_COMPONENTS
  ],
  exports: [
    MATERIAL_UI_COMPONENTS
  ]
})
export class MaterialUiModule { }
