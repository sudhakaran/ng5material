import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [],
  exports: [
    MatButtonModule
  ]
})
export class AppMaterialModule { }
