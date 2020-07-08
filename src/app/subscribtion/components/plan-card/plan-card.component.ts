import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ISubscription } from '@lib/models';
import { PlanDetailsComponent } from '../plan-details/plan-details.component';

@UntilDestroy()
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
    private _snackbarSvc: MatSnackBar,
  ) {}

  public showPlan() {
    this._dialogSvc.open(PlanDetailsComponent, {
      data: {
        subscription: this.subscription,
      }
    })
    .afterClosed()
    .pipe(untilDestroyed(this))
    .subscribe(data => {
      if (!data) {
        return;
      }

      this._snackbarSvc.open(`${data.subscription.name} ${data.plan.interval || data.plan.paymentInterval} booked successfully`)
    })
  }
}
