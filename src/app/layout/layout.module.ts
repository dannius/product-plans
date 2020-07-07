import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components';
import { SharedModule } from '@app/shared';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    SharedModule,
    HeaderComponent,
  ],
})
export class LayoutModule { }
