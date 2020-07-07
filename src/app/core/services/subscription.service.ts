import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '@env';
import { ISubscription } from '@lib/models';


@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  constructor(
    private _http: HttpClient,
  ) { }

  public getSubscriptions(): Observable<ISubscription[]> {
    const url = `${environment.hostUrl}/api/products`;

    return <Observable<ISubscription[]>>this._http.get(url);
  }
}
