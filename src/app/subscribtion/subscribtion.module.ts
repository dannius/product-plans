import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscribtionView } from './views';
import { SubscribtionRoutingModule } from './subscribtion-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SubscribtionRoutingModule,
  ],
  declarations: [
    SubscribtionView
  ]
})
export class SubscribtionModule { }
