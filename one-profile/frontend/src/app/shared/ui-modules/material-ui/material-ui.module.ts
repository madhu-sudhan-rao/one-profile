import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

const MATERIAL_UI_COMPONENTS : any= [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule
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
