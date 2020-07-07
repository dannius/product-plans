import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscribtionView } from './views';
import { PlanCardComponent, PlanDetailsComponent } from './components';
import { SubscribtionRoutingModule } from './subscribtion-routing.module';
import { MaterialModule } from '@app/material';

@NgModule({
  imports: [
    CommonModule,
    SubscribtionRoutingModule,
    MaterialModule,
  ],
  declarations: [
    SubscribtionView,
    PlanCardComponent,
    PlanDetailsComponent,
  ],
  entryComponents: [
    PlanDetailsComponent,
  ]
})
export class SubscribtionModule { }
