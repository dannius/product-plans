import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ISubscription } from '@lib/models';
import { PlanDetailsComponent } from '../plan-details/plan-details.component';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanCardComponent {
  @Input()
  public subscription: ISubscription;
  

  constructor(
    private _dialogSvc: MatDialog,
  ) {}

  public showPlan() {
    this._dialogSvc.open(PlanDetailsComponent, {
      data: {
        subscription: this.subscription,
      }
    })
  }
}
