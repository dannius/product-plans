import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscribtionView } from './views';

const routes: Routes = [
  {
    path: '',
    component: SubscribtionView,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscribtionRoutingModule {}
