import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { SubscriptionService } from '@app/core/services/subscription.service';
import { ISubscription } from '@lib/models';


@Injectable({
  providedIn: 'root',
})
export class SubscriptionsResolver implements Resolve<ISubscription[]> {

  constructor(
    private _subscriptionSvc: SubscriptionService,
  ) {}

  public resolve(): Observable<ISubscription[]> {

    return this._subscriptionSvc.getSubscriptions();
  }
}
