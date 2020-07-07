import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISubscription } from '@lib/models';

@Component({
  selector: 'app-subscribtion',
  templateUrl: './subscribtion.view.html',
  styleUrls: ['./subscribtion.view.scss'],
})
export class SubscribtionView implements OnInit {
  public subscriptions: ISubscription[];

  constructor(
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.subscriptions = this._route.snapshot.data.subscriptions.products;
  }

}
