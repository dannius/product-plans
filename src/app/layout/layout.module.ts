import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material';

import { HeaderComponent } from './components';


@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    CommonModule,
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class LayoutModule { }
