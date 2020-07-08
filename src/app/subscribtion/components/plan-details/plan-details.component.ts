import { Component, Input, Inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ISubscription, IPlan } from '@lib/models';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanDetailsComponent implements OnInit {
  @Input()
  public subscription: ISubscription;

  constructor(
    public dialogRef: MatDialogRef<PlanDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  public ngOnInit() {
    this.subscription = this.data.subscription;
  }

  public close(subscription: ISubscription, plan: IPlan) {
    this.dialogRef.close({ subscription, plan })
  }
}
