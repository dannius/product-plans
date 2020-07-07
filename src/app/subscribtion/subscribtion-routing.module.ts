import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscribtionView } from './views';
import { SubscriptionsResolver } from '@app/core';

const routes: Routes = [
  {
    path: '',
    component: SubscribtionView,
    resolve: {
      subscriptions: SubscriptionsResolver,
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    SubscriptionsResolver,
  ]
})
export class SubscribtionRoutingModule {}
